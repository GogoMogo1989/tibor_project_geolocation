const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const moment = require('moment-timezone');
const Geolocation = require('./geolocationModelFile')
const app = express();

// Middleware-ek beállítása
app.use(bodyParser.json());
app.use(cors());
app.use((req, res, next) => {
    req.currentDateTime = moment().tz('Europe/Budapest').toDate();
    console.log(req.currentDateTime)
    next();
  });

// MongoDB kapcsolódás
const url = 'mongodb+srv://GogoMogo1989:Password12345@cluster0.v457sky.mongodb.net/Geolocation?retryWrites=true&w=majority';
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('A MongoDB adatbázishoz sikeresen kapcsolódva!');
  })
  .catch((err) => {
    console.log('Hiba a MongoDB adatbázis kapcsolat során:', err);
  });

// Helyadatok mentése az adatbázisba
app.post('/api/geolocation/:params', (req, res) => {
    const { latitude, longitude } = req.body; // Az Angular alkalmazás által küldött adatok mentése az adatbázisba
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;  // Az IP cím lekérése
    const params = Math.floor(Math.random() * 1000000);
    console.log(params)
    const location = new Geolocation({ latitude, longitude, ip, params, createdAt: req.currentDateTime});
    location.save()
      .then(() => {
        console.log('Helyadatok sikeresen elmentve az adatbázisba!');
        res.status(200).json({ message: 'Helyadatok sikeresen elmentve az adatbázisba!' });
      })
      .catch((err) => {
        console.error('Hiba a helyadatok mentése során:', err);
        res.status(500).json({ error: 'Hiba a helyadatok mentése során!' });
      });
  });

  app.get('/api/geolocation/data', (req, res) => {
    Geolocation.find({}).then((data) => {
      console.log('Az adatok lekérdezése sikeres volt!')
  
      res.send(data);
    }).catch((err) => {
      console.log('Hiba az adatok lekérdezésekor:', err);
      res.status(500).send('Hiba az adatok lekérdezésekor!');
    });
  });

const port = process.env.PORT || 3000;
app.listen(port, ()  => console.log(`A szerver fut a ${port}-es porton!`));
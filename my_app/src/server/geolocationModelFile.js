const mongoose = require('mongoose');

const GeolocationSchema = new mongoose.Schema({
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    createdAt:{ type: String},
    ip: {type: String, required: true},
    params: {type: Number, required: true},
});

GeolocationSchema.path('createdAt').set(function (value) { 
    const date = new Date(value);
    date.setHours(date.getHours()+2)
    const formattedDate = date.toISOString().slice(0, 10) + ' ' + date.toISOString().slice(11, 19);
    return formattedDate;
});

module.exports = mongoose.model('Geolocation', GeolocationSchema);
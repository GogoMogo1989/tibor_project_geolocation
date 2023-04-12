const mongoose = require('mongoose');

const GeolocationSchema = new mongoose.Schema({
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    createdAt:{ type: Date },
    ip: {type: String, required: true},
    params: {type: Number, required: true},
});

module.exports = mongoose.model('Geolocation', GeolocationSchema);
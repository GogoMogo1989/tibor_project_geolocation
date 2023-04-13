const mongoose = require('mongoose');

const webcamImagesFileSchema = new mongoose.Schema({
    imageAsDataUrl: { type: String, required: true },
});

module.exports = mongoose.model('webcamImagesFileSchema', webcamImagesFileSchema);
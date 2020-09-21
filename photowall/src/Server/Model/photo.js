const mongoose = require('mongoose');

const PhotoSchema = mongoose.Schema({
    url: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Photos', PhotoSchema);
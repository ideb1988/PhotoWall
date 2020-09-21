const mongoose = require('mongoose');

const CommentSchema = mongoose.Schema({
    body: {
        type: String,
        required: true
    },
    photoId: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Comments', CommentSchema);
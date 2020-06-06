const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    title: String,
    poster: String,
    time: String,
    location: String,
    entrance: String,
    timezone: String,
    views: Number,
    description: String,
    userId: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('Note', NoteSchema);
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  author: {
    type: String,
    required: true
  },
  genre: String,
  publishedYear: Number
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema);

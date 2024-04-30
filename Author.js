// Author.js
const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  publishedDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Author', authorSchema);
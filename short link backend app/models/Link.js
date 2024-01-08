// short-link-backend/models/link.js
const mongoose = require('mongoose');

const linkSchema = new mongoose.Schema({
  url: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Link', linkSchema);

const mongoose = require('mongoose');

const wordSchema = mongoose.Schema({
  word: { type: String },
  translation: { type: String },
  category: { type: String }
});

wordSchema.set('toJSON', {
  getters: true,
  virtuals: true,
  transform(obj, json) {
    delete json._id;
    delete json.__v;
  }
});

module.exports = mongoose.model('word', wordSchema);

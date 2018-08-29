const mongoose = require('mongoose');

const cardSchema = mongoose.Schema({
  category: { type: String },
  questions: [String],
  answers: [String]
});

cardSchema.set('toJSON', {
  getters: true,
  virtuals: true,
  transform(obj, json) {
    delete json._id;
    delete json.__v;
  }
});

module.exports = mongoose.model('card', cardSchema);

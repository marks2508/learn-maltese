const mongoose   = require('mongoose');
mongoose.Promise = require('bluebird');

const { dbURI } = require('../config/environment');
const Word      = require('../models/word');

const wordData = [{
  word: 'orange',
  translation: 'njudha',
  category: 'colour'
}, {
  word: 'red',
  translation: 'ahmar',
  category: 'colour'
}, {
  word: 'blue',
  translation: 'blu',
  category: 'colour'
}, {
  word: 'black',
  translation: 'wiheed',
  category: 'colour'
}, {
  word: 'white',
  translation: 'ahkalili',
  category: 'colour'
}, {
  word: 'green',
  translation: 'klimara',
  category: 'colour'
}];

mongoose
  .connect(dbURI, { useMongoClient: true })
  .then(db => db.dropDatabase())
  .then(() => Word.create(wordData))
  .then(words => console.log(`${words.length} words created!`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());

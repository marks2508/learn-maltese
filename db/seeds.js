const mongoose   = require('mongoose');
mongoose.Promise = require('bluebird');

const { dbURI } = require('../config/environment');
const Card      = require('../models/card');
const User      = require('../models/user');

const cardData = [{
  category: 'colour',
  words: [{
    word: 'ahmar',
    translation: 'red'
  }, {
    word: 'blue',
    translation: 'blu'
  }]}, {
  category: 'body',
  words: [{
    word: 'il-ħalq',
    translation: 'mouth'
  }]
}, {
  category: 'food',
  words: [{
    word: 'hopz',
    translation: 'bread'
  }]
}
];

const userData = [{
  name: 'Mark',
  username: 'Mark',
  email: 'm@m',
  password: 'm',
  passwordConfirmation: 'm'
}];

mongoose
  .connect(dbURI, { useMongoClient: true })
  .then(db => db.dropDatabase())
  .then(() => Card.create(cardData))
  .then(() => User.create(userData))
  .then(cards => console.log(`${cards.length} cards created!`))

  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());

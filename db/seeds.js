const mongoose   = require('mongoose');
mongoose.Promise = require('bluebird');

const { dbURI } = require('../config/environment');
const Card      = require('../models/card');
const User      = require('../models/user');

const cardData = [{
  category: 'numbers',
  questions: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
  answers: ['wieħed', 'tnejn', 'tlieta', 'erbgħa', 'ħamsa', 'sitta', 'sebgħa', 'tmienja', 'disgħa']
}, {
  category: 'time',
  questions: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
  answers: ['it-tnejn', 'it-tlieta', 'l-erbgħa', 'il-ħamis', 'il-ġimgħa', 'is-sibt', 'il-ħadd']
}, {
  category: 'colour',
  questions: ['black', 'blue', 'green', 'orange', 'purple', 'red', 'yellow', 'white'],
  answers: ['sewda', 'blu', 'hadra', 'oranġjo', 'vjola', 'ħamra', 'safra', 'bajda' ]
}];


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

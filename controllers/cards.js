const Card = require('../models/card');
const User = require('../models/user');

function cardsIndex(req, res, next) {
  Card
    .find()
    .exec()
    .then(cards => res.json(cards))
    .catch(next);
}

function cardsCreate(req, res, next) {
  Card
    .create(req.body)
    .then(card => res.status(201).json(card))
    .catch(next);
}

function cardsShow(req, res, next) {
  Card
    .findById(req.params.id)
    .exec()
    .then((card) => {
      if(!card) return res.notFound();
      res.json(card);
    })
    .catch(next);
}

function cardsUpdate(req, res, next) {
  Card
    .findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(card => res.status(200).json(card))
    .catch(next);
}

function cardsDelete(req, res, next) {
  Card
    .findByIdAndRemove(req.params.id)
    .then(() => res.status(204).end())
    .catch(next);
}

function cardsFavourite(req, res, next) {
  User
    .findById(req.currentUser)
    .exec()
    .then((user) => {
      // check if favourite is already in user' - indexOf returns -1 if it is not there
      if (user.favourites.indexOf(req.params.id) > -1) {
        // removing of the id
        const index = user.favourites.indexOf(req.params.id);
        user.favourites.splice(index, 1);
      } else {
        // push the id in to the user.favourites
        user.favourites.push(req.params.id);
      }

      return user.save();
    })
    .then((user) => res.json(user))
    .catch(next);
}

module.exports = {
  index: cardsIndex,
  create: cardsCreate,
  show: cardsShow,
  update: cardsUpdate,
  delete: cardsDelete,
  favourite: cardsFavourite
};

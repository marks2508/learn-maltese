const Card = require('../models/card');

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

module.exports = {
  index: cardsIndex,
  create: cardsCreate,
  show: cardsShow,
  update: cardsUpdate,
  delete: cardsDelete  
};

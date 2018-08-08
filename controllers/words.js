const Word = require('../models/word');

function wordsIndex(req, res, next) {
  Word
    .find()
    .exec()
    .then(words => res.json(words))
    .catch(next);
}

function wordsCreate(req, res, next) {
  Word
    .create(req.body)
    .then(word => res.status(201).json(word))
    .catch(next);
}

function wordsShow(req, res, next) {
  Word
    .findById(req.params.id)
    .exec()
    .then((word) => {
      if(!word) return res.notFound();
      res.json(word);
    })
    .catch(next);
}

function wordsUpdate(req, res, next) {
  Word
    .findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(word => res.status(200).json(word))
    .catch(next);
}

function wordsDelete(req, res, next) {
  Word
    .findByIdAndRemove(req.params.id)
    .then(() => res.status(204).end())
    .catch(next);
}

module.exports = {
  index: wordsIndex,
  create: wordsCreate,
  show: wordsShow,
  update: wordsUpdate,
  delete: wordsDelete
};

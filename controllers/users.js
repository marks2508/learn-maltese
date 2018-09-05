const User = require('../models/user');

function usersIndex(req, res, next) {
  User
    .find()
    .exec()
    .then(users => res.json(users))
    .catch(next);
}

function usersShow(req, res, next) {
  User
    .findById(req.params.id)
    .exec()
    .then((user) => {
      if(!user) return res.notFound();
      res.json(user);
    })
    .catch(next);
}

function addFavourite(req, res, next) {
  console.log('request:', req.body);
  console.log('addFavourite back-end function called');
  console.log( 'id: ', req.params );
  User
    .findById(req.params.id)
    .exec()
    .then((user) => {
      if(!user) return res.notFound();
      user = Object.assign(user, req.body);
      return user.save();
    })
    .then(user => res.json(user))
    .catch(next);
}

function showfavourites(req, res, next) {
  User
    .findById(req.params.id)
    .exec()
    .then((user) => {
      if(!user) return res.notFound();
      res.json(user);
    })
    .catch(next);
}

function deletefavourites(req, res, next) {
  User
    .findByIdAndRemove(req.params.id)
    .then(() => res.status(204).end())
    .catch(next);
}

module.exports = {
  index: usersIndex,
  show: usersShow,
  addfavourite: addFavourite,
  showfavourites: showfavourites,
  deletefavourites: deletefavourites
};

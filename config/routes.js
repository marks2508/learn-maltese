const router = require('express').Router();
const cards  = require('../controllers/cards');
const auth = require('../controllers/auth');
const user = require('../controllers/users');
const secureRoute = require('../lib/secureRoute');

router.route('/cards')
  .get(cards.index)
  .post(cards.create);

router.route('/cards/:id')
  .get(cards.show)
  .put(cards.update)
  .delete(secureRoute, cards.delete);

router.route('/users')
  .get(user.index);

router.route('/users/:id')
  .get(user.show);

router.route('/users/:id/favourites')
  .get(user.showfavourites)
  .put(user.addfavourite)
  .delete(user.deletefavourites);

router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);

router.all('/*', (req, res) => res.notFound());

module.exports = router;

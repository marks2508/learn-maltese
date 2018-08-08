const router = require('express').Router();
const words  = require('../controllers/words');
const auth = require('../controllers/auth');
const secureRoute = require('../lib/secureRoute');

router.route('/words')
  .get(words.index)
  .post(words.create);

router.route('/words/:id')
  .get(words.show)
  .put(words.update)
  .delete(secureRoute, words.delete);

router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);

router.all('/*', (req, res) => res.notFound());

module.exports = router;

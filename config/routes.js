const router = require('express').Router();
const words  = require('../controllers/words');

router.route('/words')
  .get(words.index)
  .post(words.create);

router.route('/words/:id')
  .get(words.show)
  .put(words.update)
  .delete(words.delete);

router.all('/*', (req, res) => res.notFound());

module.exports = router;

const express = require('express');
const router = express.Router();
const games = require('../services/games');

/* GET games */
router.get('/', async function(req, res, next) {
  try {
    res.json(await games.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting games`, err.message);
    next(err);
  }
});

/* POST games */
router.post('/', async function(req, res, next) {
  try {
    res.json(await games.create(req.body));
  } catch (err) {
    console.error(`Error while creating games`, err.message);
    next(err);
  }
});


/* PUT games*/
router.put('/:id', async function(req, res, next) {
  try {
    res.json(await games.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating games`, err.message);
    next(err);
  }
});

/* DELETE games */
router.delete('/:id', async function(req, res, next) {
  try {
    res.json(await games.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting games`, err.message);
    next(err);
  }
});


module.exports = router;
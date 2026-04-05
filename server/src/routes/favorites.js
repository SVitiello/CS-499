const express = require('express');
const router = express.Router();
const favoritesController = require('../controllers/favorites');

router.post('/', favoritesController.addFavorite);
router.get('/:userId', favoritesController.getFavoritesByUser);

module.exports = router;
const express = require('express');
const router = express.Router();
const animalsController = require('../controllers/animals');

router.get('/', animalsController.getAnimals);
router.get('/search', animalsController.searchAnimals);

module.exports = router;
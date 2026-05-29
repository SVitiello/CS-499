const express = require('express');
const router = express.Router();
const { getAllAnimals, getAnimalById } = require('../controllers/animals');

// Gets all animals
router.get('/', getAllAnimals);

// Gets animal by Id
router.get('/', getAnimalById);

module.exports = router;
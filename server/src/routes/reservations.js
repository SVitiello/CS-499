const express = require('express');
const router = express.Router();
const reservationsController = require('../controllers/reservations');


router.post('/', reservationsController.reserveAnimal);
router.get('/:userId', reservationsController.getReservationsByUser);

module.exports = router;
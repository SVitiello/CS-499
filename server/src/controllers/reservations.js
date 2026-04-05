const Animal = require('../models/animals');
const Reservation = require('../models/Reservation');

// Adds a new reserved animal to a users account
const reserveAnimal = async (req, res) => {
  try {
    const { userId, animalId } = req.body;

    const animal = await Animal.findById(animalId);

    if (!animal) {
      return res.status(404).json({ message: 'Animal not found' });
    }

    if (animal.reserved) {
      return res.status(400).json({ message: 'Animal not available' });
    }

    const reservation = await Reservation.create({
      userId,
      animalId
    });

    animal.reserved = true;
    await animal.save();

    res.status(201).json({
      message: 'Reservation created successfully',
      reservation
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to reserve animal',
      error: error.message
    });
  }
};

// Gets list of all reserved animals for a user
const getReservationsByUser = async (req, res) => {
  try {
    const { userId } = req.params;

    const reservations = await Reservation.find({ userId }).populate('animalId');

    res.status(200).json(reservations);
  } catch (error) {
    res.status(500).json({
      message: 'Failed to retrieve reservations',
      error: error.message
    });
  }
};

module.exports = {
  reserveAnimal,
  getReservationsByUser
};
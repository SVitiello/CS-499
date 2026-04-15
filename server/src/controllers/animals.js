const Animal = require('../models/animals');

const getAnimals = async (req, res) => {
  try {
    const animals = await Animal.find();
    res.status(200).json(animals);
  } catch (error) {
    res.status(500).json({
      message: 'Failed to retrieve animals',
      error: error.message
    });
  }
};

const searchAnimals = async (req, res) => {
  try {
    const { animalType, gender, minAge, maxAge } = req.query;

    const query = {};

    if (animalType) {
      query.animalType = { $regex: new RegExp(`^${animalType}$`, 'i') };
    }

    if (gender) {
      query.gender = { $regex: new RegExp(`^${gender}$`, 'i') };
    }

    if (minAge || maxAge) {
      query.age = {};

      if (minAge) {
        query.age.$gte = Number(minAge);
      }

      if (maxAge) {
        query.age.$lte = Number(maxAge);
      }
    }

    const animals = await Animal.find(query);

    res.status(200).json(animals);
  } catch (error) {
    res.status(500).json({
      message: 'Failed to search animals',
      error: error.message
    });
  }
};

module.exports = {
  getAnimals,
  searchAnimals
};


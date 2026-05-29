const animals = require('../data/animals');

// Gets list of all animals
const getAllAnimals = (req, res) => {
  res.json(animals);
};

// Gets an animal by their Id
const getAnimalById = (req, res) => {
    const animalId = parseInt(req.params.id);

    const animal = animals.find(a => a.id === animalId);

    if(!animal) {
        return res.status(404).json({ message: "Animal not found"});
    }

    res.json(animal);
};

module.exports = {
  getAllAnimals,
  gatAnimalById
};
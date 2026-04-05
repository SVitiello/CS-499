require('dotenv').config();
const mongoose = require('mongoose');
const Animal = require('../models/animals');

// Seeding MongoDB database
const animals = [
    {
        id: 1,
        name: "Frank",
        animalType: "Dog",
        gender: "Male",
        age: "24",
        weight: "50",
        acquisitionDate: "2026-01-15",
        acquisitionCountry: "United States",
        trainingStatus: "In training",
        reserved: "false",
        inServiceCountry: "United States"
    },
    {
        id: 2,
        name: "Lucy",
        animalType: "Monkey",
        gender: "Female",
        age: "7",
        weight: "4",
        acquisitionDate: "2025-12-15",
        acquisitionCountry: "Canada",
        trainingStatus: "Not trained",
        reserved: "false",
        inServiceCountry: "Canada"
    },
    {
        id: 3,
        name: "Lady",
        animalType: "Dog",
        gender: "Female",
        age: "60",
        weight: "48",
        acquisitionDate: "2026-08-03",
        acquisitionCountry: "United States",
        trainingStatus: "Fully trained",
        reserved: "true",
        inServiceCountry: "United States"
    },
    {
        id: 4,
        name: "Shadow",
        animalType: "Dog",
        gender: "Male",
        age: "36",
        weight: "70",
        acquisitionDate: "2024-09-24",
        acquisitionCountry: "Mexico",
        trainingStatus: "In Training",
        reserved: "false",
        inServiceCountry: "United States"
    },
    {
        id: 5,
        name: "Chip",
        animalType: "Monkey",
        gender: "male",
        age: "24",
        weight: "5",
        acquisitionDate: "2025-04-19",
        acquisitionCountry: "Canada",
        trainingStatus: "In training",
        reserved: "true",
        inServiceCountry: "Canada"
    }
]

const seedAnimals = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    await Animal.deleteMany({});
    await Animal.insertMany(animals);

    console.log('Animals seeded successfully');
    process.exit();
  } catch (error) {
    console.error('Seeding failed:', error.message);
    process.exit(1);
  }
};

seedAnimals();
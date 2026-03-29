// Mock data for animals used for testing prior to connecting to mongoDB database

const animals = [
    {
        id: 1,
        name: "Frank",
        animalType: "Dog",
        gender: "Male",
        age: "2 years",
        weight: "50 pounds",
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
        age: "7 months",
        weight: "4 pounds",
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
        age: "5 years",
        weight: "48 pounds",
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
        age: "3 years",
        weight: "70 pounds",
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
        age: "2 years",
        weight: "5 pounds",
        acquisitionDate: "2025-04-19",
        acquisitionCountry: "Canada",
        trainingStatus: "In training",
        reserved: "true",
        inServiceCountry: "Canada"
    }
]

module.exports = animals;
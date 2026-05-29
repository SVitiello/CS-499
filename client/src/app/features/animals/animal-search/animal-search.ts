import { Component } from '@angular/core';

@Component({
  selector: 'app-animal-search',
  standalone: false,
  templateUrl: './animal-search.html',
  styleUrl: './animal-search.css',
})
export class AnimalSearch {
  animalType = '';
  gender = '';
  hasSearched = false;

  // Using a mock list of animals prior to connecting database
  animals = [
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
        reserved: false,
        inServiceCountry: "United States",
        isFavorite: false
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
        reserved: false,
        inServiceCountry: "Canada",
        isFavorite: false
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
        reserved: true,
        inServiceCountry: "United States",
        isFavorite: false
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
        reserved: false,
        inServiceCountry: "United States",
        isFavorite: false
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
        reserved: true,
        inServiceCountry: "Canada",
        isFavorite: false
    }
  ]

  // Search functions to filter search results by animal type and gender
  filteredAnimals = [...this.animals];

  searchAnimals() {
    this.hasSearched = true;

    this.filteredAnimals = this.animals.filter(animal => {
      const matchesType = !this.animalType ||
      animal.animalType === this.animalType;

      const matchesGender = !this.gender ||
      animal.gender.toLowerCase() === (this.gender.toLowerCase());

      return matchesType && matchesGender;
    });
  }

  // Clear search results
  clearSearch() {
    this.animalType = '';
    this.gender = '';
    this.hasSearched = false;
    this.filteredAnimals = [...this.animals];
  }
}

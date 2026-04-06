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
  // converting age into months to work with search algorithm
  minAgeMonths: number | null = null;
  maxAgeMonths: number | null = null;
  

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
  filteredAnimals = this.animals.map(animal => ({
    ...animal,
    rankScore: 0
  }));

searchAnimals() {
  this.hasSearched = true;

  this.filteredAnimals = this.animals.filter(animal => {
    const matchesType =
      !this.animalType ||
      animal.animalType.toLowerCase() === this.animalType.toLowerCase();

    const matchesGender =
      !this.gender ||
      animal.gender.toLowerCase() === this.gender.toLowerCase();

    const animalAgeMonths = this.getAgeInMonths(animal.age);

    const matchesMinAge =
      this.minAgeMonths === null || animalAgeMonths >= this.minAgeMonths;

    const matchesMaxAge =
      this.maxAgeMonths === null || animalAgeMonths <= this.maxAgeMonths;

    const matchesAge = matchesMinAge && matchesMaxAge;

    return matchesType && matchesGender && matchesAge;
  })
  .map(animal => ({
    ...animal,
    rankScore: this.scoreAnimal(animal)
  }))
  .sort((a, b) => b.rankScore - a.rankScore);
}

  scoreAnimal(animal: any): number {
    let score = 0;

    const trainingStatus = animal.trainingStatus.toLowerCase();


    // Adds score for training status. 
    if (trainingStatus === 'fully trained') {
      score += 50;
    } else if (trainingStatus === 'in training') {
      score += 30;
    }

    // Adds score for animal type.
    if (this.animalType && animal.animalType.toLowerCase() === this.animalType.toLowerCase()) {
      score += 30;
    }

    // calls function to convert animal age to months
    const animalAgeMonths = this.getAgeInMonths(animal.age);

    // Adds score for age of animal.
    if (this.minAgeMonths !== null && this.maxAgeMonths !== null &&
      animalAgeMonths >= this.minAgeMonths && animalAgeMonths <= this.maxAgeMonths) {
        score += 30;
      }

    return score;
  }

  // function to convert animal age to months
  getAgeInMonths(age: string): number {
    const parts = age.toLowerCase().split(' ');
    const value = parseInt(parts[0], 10);
    const unit = parts[1];
    
    // if the age is in years, multiply by 12.
    if (unit.includes('year')) {
      return value * 12;
    }

    return value;
  }


  // Clear search results
  clearSearch() {
    this.animalType = '';
    this.gender = '';
    this.hasSearched = false;
    this.minAgeMonths = null;
    this.maxAgeMonths = null;

    this.filteredAnimals = this.animals.map(animal => ({
      ...animal,
      rankScore: 0
    }));
  }
}

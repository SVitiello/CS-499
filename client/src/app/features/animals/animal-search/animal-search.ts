import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Animal, AnimalService } from '../animal-service';

@Component({
  selector: 'app-animal-search',
  standalone: false,
  templateUrl: './animal-search.html',
  styleUrl: './animal-search.css',
})

export class AnimalSearch implements OnInit {
  animalType = '';
  gender = '';
  hasSearched = false;
  // converting age into months to work with search algorithm
  minAgeMonths: number | null = null;
  maxAgeMonths: number | null = null;
  
  // Pulling animals from database
  animals: Animal [] = [];

  // Search functions to filter search results by animal type and gender
  filteredAnimals: Animal[] = [];

  // Controls pagination through the front-end. Starts on page 1, limit 4 results per page.
  currentPage = 1;
  itemsPerPage = 4;

  constructor(private animalService:AnimalService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadAnimals();
  }

  loadAnimals(): void {
    this.animalService.getAnimals().subscribe({
      next: (animals) => {
        this.animals = animals.map(animal => ({
          ...animal,
          isFavorite: false,
          rankScore: 0
        }));

        this.filteredAnimals = [];
        this.hasSearched = false;
      },
      error: (error) => {
        console.error('Failed to load animasl:', error);
      }
    });
  }

  searchAnimals(): void {
    this.hasSearched = true;
    this.currentPage = 1;

    this.animalService.searchAnimals({
      animalType: this.animalType || undefined,
      gender: this.gender || undefined,
      minAge: this.minAgeMonths,
      maxAge: this.maxAgeMonths
    }).subscribe({
      next: (animals: Animal[]) => {
        this.filteredAnimals = animals
        .map(animal => ({
          ...animal,
          isFavorite: false,
          rankScore: this.scoreAnimal(animal)
        }))
        .sort((a,b) => (b.rankScore || 0) - (a.rankScore || 0));
        // immediately updates form. Gets rid of bug with delay on click.
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Failed to search animals:', error);
        this.filteredAnimals = [];
        this.cdr.detectChanges();
      }
    });
  }

  scoreAnimal(animal: Animal): number {
    let score = 0;
    const trainingStatus = animal.trainingStatus?.toLowerCase() || '';

    if (trainingStatus === 'fully trained') {
      score += 50;
    } else if (trainingStatus === 'in training') {
      score += 30;
    }

    if (
      this.animalType &&
      animal.animalType.toLowerCase() === this.animalType.toLowerCase()
    ) {
      score += 30;
    }

    if (
      this.minAgeMonths !== null &&
      this.maxAgeMonths !== null &&
      animal.age >= this.minAgeMonths &&
      animal.age <= this.maxAgeMonths
    ) {
      score += 30;
    }

    return score;
  }

  // Logic for pagination controlled through front-end
  get paginatedAnimals(): Animal[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.filteredAnimals.slice(startIndex, endIndex);
    this.cdr.detectChanges();
  }

  // shows the total pages returned in results
  get totalPages(): number {
    return Math.ceil(this.filteredAnimals.length / this.itemsPerPage);
  }

  // Moves to next page of results
  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.cdr.detectChanges();
    }
  }

  // Moves to previous page of results
  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.cdr.detectChanges();
    }
  }

  formatAge(ageInMonths: number): string {
    if (ageInMonths >= 12) {
      const years = Math.floor(ageInMonths / 12);
      return years === 1 ? '1 year' : `${years} years`;
    }

    return ageInMonths === 1 ? '1 month' : `${ageInMonths} months`;
  }

  formatWeight(weight: number): string {
    return `${weight} pounds`;
  }

  clearSearch(): void {
    this.animalType = '';
    this.gender = '';
    this.hasSearched = false;
    this.minAgeMonths = null;
    this.maxAgeMonths = null;
    // no results show on clear button hit
    this.filteredAnimals = [];
    // starts cleared search at page 1
    this.currentPage = 1;
    // immediately updates form. Gets rid of bug with delay on click.
    this.cdr.detectChanges();
  }
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-animal-list',
  standalone: false,
  templateUrl: './animal-list.html',
  styleUrl: './animal-list.css',
})

// Using a mock animal list to test front end before setting up backend.
// Pulls in search data from animal-search
export class AnimalList {
  @Input() animals: any[] = [];
  @Input() hasSearched = false;

  // This puts a favorite button and a reserve button on the animal cards.
  // This will be used with the database to save user favorites and reserve animals.
  favoriteAnimal(animal: any) {
    animal.isFavorite = !animal.isFavorite;
  }

  reserveAnimal(animal: any) {
    animal.reserved = !animal.reserved;
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Animal {
  _id: string;
  name: string;
  animalType: string;
  gender: string;
  age: number;
  weight: number;
  acquisitionDate: string;
  acquisitionCountry: string;
  trainingStatus: string;
  reserved: boolean;
  inServiceCountry: string;
  isFavorite?: boolean;
  rankScore?: number;
}

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  private animalsUrl = 'http://localhost:3000/api/animals';

  constructor(private http: HttpClient) {}

  getAnimals(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.animalsUrl);
  }

  searchAnimals(filters: {
    animalType?: string;
    gender?: string;
    minAge?: number | null;
    maxAge?: number | null;
  }): Observable<Animal[]> {
    let params = new HttpParams();

    if (filters.animalType) {
      params = params.set('animalType', filters.animalType);
    }

    if (filters.gender) {
      params = params.set('gender', filters.gender);
    }

    if (filters.minAge !== null && filters.minAge !== undefined) {
      params = params.set('minAge', filters.minAge.toString());
    }

    if (filters.maxAge !== null && filters.maxAge !== undefined) {
      params = params.set('maxAge', filters.maxAge.toString());
    }

    return this.http.get<Animal[]>(`${this.animalsUrl}/search`, { params });
  }
}
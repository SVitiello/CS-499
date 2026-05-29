import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalSearch } from './animal-search';

describe('AnimalSearch', () => {
  let component: AnimalSearch;
  let fixture: ComponentFixture<AnimalSearch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnimalSearch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalSearch);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

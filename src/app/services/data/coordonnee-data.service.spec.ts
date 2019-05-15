import { TestBed } from '@angular/core/testing';

import { CoordonneeDataService } from './coordonnee-data.service';

describe('CoordonneeDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoordonneeDataService = TestBed.get(CoordonneeDataService);
    expect(service).toBeTruthy();
  });
});

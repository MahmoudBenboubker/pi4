import { TestBed } from '@angular/core/testing';

import { ParcelleDataService } from './parcelle-data.service';

describe('ParcelleDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParcelleDataService = TestBed.get(ParcelleDataService);
    expect(service).toBeTruthy();
  });
});

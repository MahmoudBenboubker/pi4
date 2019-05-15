import { TestBed } from '@angular/core/testing';

import { RechercheBoService } from './recherche-bo.service';

describe('RechercheBoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RechercheBoService = TestBed.get(RechercheBoService);
    expect(service).toBeTruthy();
  });
});

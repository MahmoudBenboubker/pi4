import { TestBed } from '@angular/core/testing';

import { SuppressionBoService } from './suppression-bo.service';

describe('SuppressionBoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SuppressionBoService = TestBed.get(SuppressionBoService);
    expect(service).toBeTruthy();
  });
});

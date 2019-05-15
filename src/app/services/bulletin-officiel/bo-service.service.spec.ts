import { TestBed } from '@angular/core/testing';

import { BoServiceService } from './bo-service.service';

describe('BoServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BoServiceService = TestBed.get(BoServiceService);
    expect(service).toBeTruthy();
  });
});

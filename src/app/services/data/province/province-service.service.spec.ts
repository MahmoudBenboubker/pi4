import { TestBed } from '@angular/core/testing';

import { ProvinceServiceService } from './province-service.service';

describe('ProvinceServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProvinceServiceService = TestBed.get(ProvinceServiceService);
    expect(service).toBeTruthy();
  });
});

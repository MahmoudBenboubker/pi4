import { TestBed } from '@angular/core/testing';

import { AuthetificationServiceService } from './authetification-service.service';

describe('AuthetificationServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthetificationServiceService = TestBed.get(AuthetificationServiceService);
    expect(service).toBeTruthy();
  });
});

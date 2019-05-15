import { TestBed } from '@angular/core/testing';

import { BulletinOfficielService } from './bulletin-officiel.service';

describe('BulletinOfficielService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BulletinOfficielService = TestBed.get(BulletinOfficielService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ModificationBoService } from './modification-bo.service';

describe('ModificationBoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModificationBoService = TestBed.get(ModificationBoService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { AbooksService } from './abooks.service';

describe('AbooksService', () => {
  let service: AbooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

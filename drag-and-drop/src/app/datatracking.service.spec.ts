import { TestBed } from '@angular/core/testing';

import { DatatrackingService } from './datatracking.service';

describe('DatatrackingService', () => {
  let service: DatatrackingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatatrackingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

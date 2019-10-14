/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DatatrackingService } from './datatracking.service';

describe('Service: Datatracking', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatatrackingService]
    });
  });

  it('should ...', inject([DatatrackingService], (service: DatatrackingService) => {
    expect(service).toBeTruthy();
  }));
});

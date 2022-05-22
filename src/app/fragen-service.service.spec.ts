/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FragenServiceService } from './fragen-service.service';

describe('Service: FragenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FragenServiceService]
    });
  });

  it('should ...', inject([FragenServiceService], (service: FragenServiceService) => {
    expect(service).toBeTruthy();
  }));
});

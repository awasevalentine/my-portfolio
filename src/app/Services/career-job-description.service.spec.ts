import { TestBed } from '@angular/core/testing';

import { CareerJobDescriptionService } from './career-job-description.service';

describe('CareerJobDescriptionService', () => {
  let service: CareerJobDescriptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CareerJobDescriptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

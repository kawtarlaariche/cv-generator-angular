import { TestBed } from '@angular/core/testing';

import { DataCvService } from './data-cv.service';

describe('DataCvService', () => {
  let service: DataCvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataCvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

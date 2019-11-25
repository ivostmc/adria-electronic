import { TestBed } from '@angular/core/testing';

import { HolidayService } from './holiday.service';

describe('HolidayServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HolidayService = TestBed.get(HolidayService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { QrService } from './qr.service';

describe('QrServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QrService = TestBed.get(QrService);
    expect(service).toBeTruthy();
  });
});

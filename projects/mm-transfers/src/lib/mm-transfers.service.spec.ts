import { TestBed, inject } from '@angular/core/testing';

import { MmTransfersService } from './mm-transfers.service';

describe('MmTransfersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MmTransfersService]
    });
  });

  it('should be created', inject([MmTransfersService], (service: MmTransfersService) => {
    expect(service).toBeTruthy();
  }));
});

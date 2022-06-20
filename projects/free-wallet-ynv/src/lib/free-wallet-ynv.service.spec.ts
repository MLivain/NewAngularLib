import { TestBed } from '@angular/core/testing';

import { FreeWalletYnvService } from './free-wallet-ynv.service';

describe('FreeWalletYnvService', () => {
  let service: FreeWalletYnvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FreeWalletYnvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

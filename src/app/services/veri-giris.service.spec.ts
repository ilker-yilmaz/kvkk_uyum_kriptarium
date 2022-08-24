import { TestBed } from '@angular/core/testing';

import { VeriGirisService } from './veri-giris.service';

describe('VeriGirisService', () => {
  let service: VeriGirisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VeriGirisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { FakeflipkartService } from './fakeflipkart.service';

describe('FakeflipkartService', () => {
  let service: FakeflipkartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeflipkartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

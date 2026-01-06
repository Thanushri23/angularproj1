import { TestBed } from '@angular/core/testing';

import { Apiusersservice } from './apiusersservice';

describe('Apiusersservice', () => {
  let service: Apiusersservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Apiusersservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

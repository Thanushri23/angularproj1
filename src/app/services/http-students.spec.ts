import { TestBed } from '@angular/core/testing';

import { HttpStudents } from './http-students';

describe('HttpStudents', () => {
  let service: HttpStudents;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpStudents);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

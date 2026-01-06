import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiEmployees } from './api-employees';

describe('ApiEmployees', () => {
  let component: ApiEmployees;
  let fixture: ComponentFixture<ApiEmployees>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiEmployees]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiEmployees);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

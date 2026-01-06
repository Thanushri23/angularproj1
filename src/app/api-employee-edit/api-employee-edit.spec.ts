import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiEmployeeEdit } from './api-employee-edit';

describe('ApiEmployeeEdit', () => {
  let component: ApiEmployeeEdit;
  let fixture: ComponentFixture<ApiEmployeeEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiEmployeeEdit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiEmployeeEdit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpUser } from './http-user';

describe('HttpUser', () => {
  let component: HttpUser;
  let fixture: ComponentFixture<HttpUser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpUser]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpUser);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fruits3 } from './fruits3';

describe('Fruits3', () => {
  let component: Fruits3;
  let fixture: ComponentFixture<Fruits3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fruits3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fruits3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

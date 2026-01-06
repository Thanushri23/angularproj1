import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fruits2 } from './fruits2';

describe('Fruits2', () => {
  let component: Fruits2;
  let fixture: ComponentFixture<Fruits2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fruits2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fruits2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

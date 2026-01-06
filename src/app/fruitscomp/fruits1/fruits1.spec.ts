import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fruits1 } from './fruits1';

describe('Fruits1', () => {
  let component: Fruits1;
  let fixture: ComponentFixture<Fruits1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fruits1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fruits1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

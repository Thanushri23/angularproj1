import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesComp } from './pipes-comp';

describe('PipesComp', () => {
  let component: PipesComp;
  let fixture: ComponentFixture<PipesComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipesComp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipesComp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

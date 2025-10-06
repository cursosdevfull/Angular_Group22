import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C5 } from './c5';

describe('C5', () => {
  let component: C5;
  let fixture: ComponentFixture<C5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [C5]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C5);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

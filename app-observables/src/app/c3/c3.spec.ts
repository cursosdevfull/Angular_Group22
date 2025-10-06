import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C3 } from './c3';

describe('C3', () => {
  let component: C3;
  let fixture: ComponentFixture<C3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [C3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

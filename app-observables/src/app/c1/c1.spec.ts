import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C1 } from './c1';

describe('C1', () => {
  let component: C1;
  let fixture: ComponentFixture<C1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [C1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

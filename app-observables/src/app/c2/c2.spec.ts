import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C2 } from './c2';

describe('C2', () => {
  let component: C2;
  let fixture: ComponentFixture<C2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [C2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

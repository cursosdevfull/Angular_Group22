import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C4 } from './c4';

describe('C4', () => {
  let component: C4;
  let fixture: ComponentFixture<C4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [C4]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C4);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

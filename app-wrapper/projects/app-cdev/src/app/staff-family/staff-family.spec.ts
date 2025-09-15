import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffFamily } from './staff-family';

describe('StaffFamily', () => {
  let component: StaffFamily;
  let fixture: ComponentFixture<StaffFamily>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaffFamily]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffFamily);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

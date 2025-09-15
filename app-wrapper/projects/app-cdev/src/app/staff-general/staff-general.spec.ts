import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffGeneral } from './staff-general';

describe('StaffGeneral', () => {
  let component: StaffGeneral;
  let fixture: ComponentFixture<StaffGeneral>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaffGeneral]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffGeneral);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

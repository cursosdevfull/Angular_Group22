import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffHobbies } from './staff-hobbies';

describe('StaffHobbies', () => {
  let component: StaffHobbies;
  let fixture: ComponentFixture<StaffHobbies>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaffHobbies]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffHobbies);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

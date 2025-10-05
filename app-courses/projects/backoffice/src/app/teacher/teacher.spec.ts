import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Teacher } from './teacher';

describe('Teacher', () => {
  let component: Teacher;
  let fixture: ComponentFixture<Teacher>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Teacher]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Teacher);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCDevLib } from './app-cdev-lib';

describe('AppCDevLib', () => {
  let component: AppCDevLib;
  let fixture: ComponentFixture<AppCDevLib>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppCDevLib]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppCDevLib);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

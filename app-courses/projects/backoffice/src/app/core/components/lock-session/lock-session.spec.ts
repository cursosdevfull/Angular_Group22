import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LockSession } from './lock-session';

describe('LockSession', () => {
  let component: LockSession;
  let fixture: ComponentFixture<LockSession>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LockSession]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LockSession);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

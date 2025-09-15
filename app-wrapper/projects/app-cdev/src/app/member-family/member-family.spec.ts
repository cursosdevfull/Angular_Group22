import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberFamily } from './member-family';

describe('MemberFamily', () => {
  let component: MemberFamily;
  let fixture: ComponentFixture<MemberFamily>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemberFamily]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemberFamily);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

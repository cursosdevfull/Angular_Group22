import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportOptions } from './export-options';

describe('ExportOptions', () => {
  let component: ExportOptions;
  let fixture: ComponentFixture<ExportOptions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExportOptions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExportOptions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Export } from './export';

describe('Export', () => {
  let component: Export;
  let fixture: ComponentFixture<Export>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Export]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Export);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

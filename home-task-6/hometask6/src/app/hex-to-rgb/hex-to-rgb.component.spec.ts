import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HexToRgbComponent } from './hex-to-rgb.component';

describe('HexToRgbComponent', () => {
  let component: HexToRgbComponent;
  let fixture: ComponentFixture<HexToRgbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HexToRgbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HexToRgbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

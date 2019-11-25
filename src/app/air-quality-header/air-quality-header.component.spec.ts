import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirQualityHeaderComponent } from './air-quality-header.component';

describe('AirQualityHeaderComponent', () => {
  let component: AirQualityHeaderComponent;
  let fixture: ComponentFixture<AirQualityHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirQualityHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirQualityHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

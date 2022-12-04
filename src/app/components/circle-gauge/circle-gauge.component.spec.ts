import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CircleGaugeComponent } from './circle-gauge.component';

describe('CircleGaugeComponent', () => {
  let component: CircleGaugeComponent;
  let fixture: ComponentFixture<CircleGaugeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [CircleGaugeComponent]
    });
    fixture = TestBed.createComponent(CircleGaugeComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
});

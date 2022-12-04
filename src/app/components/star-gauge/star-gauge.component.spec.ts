import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { StarGaugeComponent } from './star-gauge.component';

describe('StarGaugeComponent', () => {
  let component: StarGaugeComponent;
  let fixture: ComponentFixture<StarGaugeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [StarGaugeComponent]
    });
    fixture = TestBed.createComponent(StarGaugeComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
});

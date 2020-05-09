import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarGaugeComponent } from './star-gauge.component';

describe('StarGaugeComponent', () => {
  let component: StarGaugeComponent;
  let fixture: ComponentFixture<StarGaugeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarGaugeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarGaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AnimationBuilder } from '@angular/animations';
import { GaugeComponent } from './gauge.component';

describe('GaugeComponent', () => {
  let component: GaugeComponent;
  let fixture: ComponentFixture<GaugeComponent>;

  beforeEach(() => {
    const animationBuilderStub = () => ({
      build: array => ({ create: () => ({ play: () => {} }) })
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [GaugeComponent],
      providers: [
        { provide: AnimationBuilder, useFactory: animationBuilderStub }
      ]
    });
    fixture = TestBed.createComponent(GaugeComponent);
    component = fixture.componentInstance;
    component.gaugeFiller = { nativeElement: null }
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`value has default value`, () => {
    expect(component.value).toEqual(0);
  });

  it(`maxValue has default value`, () => {
    expect(component.maxValue).toEqual(100);
  });

  describe('onMouseEnter', () => {
    it('makes expected calls', () => {
      const animationBuilderStub: AnimationBuilder = fixture.debugElement.injector.get(
        AnimationBuilder
      );
      spyOn(animationBuilderStub, 'build').and.callThrough();
      component.onMouseEnter();
      expect(animationBuilderStub.build).toHaveBeenCalled();
    });
  });

  describe('onMouseExit', () => {
    it('makes expected calls', () => {
      const animationBuilderStub: AnimationBuilder = fixture.debugElement.injector.get(
        AnimationBuilder
      );
      spyOn(animationBuilderStub, 'build').and.callThrough();
      component.onMouseExit();
      expect(animationBuilderStub.build).toHaveBeenCalled();
    });
  });
});

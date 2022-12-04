import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { LocaleService } from 'src/app/services/locale.service';
import { ExperiencePageComponent } from './experience-page.component';
import { TranslatorPipe } from 'src/app/pipes/translator.pipe';

describe('ExperiencePageComponent', () => {
  let component: ExperiencePageComponent;
  let fixture: ComponentFixture<ExperiencePageComponent>;

  beforeEach(() => {
    const dataServiceStub = () => ({
      getResume: () => ({ subscribe: f => f({}) })
    });
    const localeServiceStub = () => ({
      localeChange: { subscribe: f => f({}) }
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ExperiencePageComponent, TranslatorPipe],
      providers: [
        { provide: DataService, useFactory: dataServiceStub },
        { provide: LocaleService, useFactory: localeServiceStub }
      ]
    });
    spyOn(ExperiencePageComponent.prototype, 'getResume');
    fixture = TestBed.createComponent(ExperiencePageComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  describe('constructor', () => {
    it('makes expected calls', () => {
      expect(ExperiencePageComponent.prototype.getResume).toHaveBeenCalled();
    });
  });

  describe('getResume', () => {
    it('makes expected calls', () => {
      const dataServiceStub: DataService = fixture.debugElement.injector.get(
        DataService
      );
      spyOn(dataServiceStub, 'getResume').and.callThrough();
      (<jasmine.Spy>component.getResume).and.callThrough();
      component.getResume();
      expect(dataServiceStub.getResume).toHaveBeenCalled();
    });
  });
});

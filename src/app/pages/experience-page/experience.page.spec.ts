import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { LocaleService } from 'src/app/services/locale.service';
import { ExperiencePage } from './experience.page';
import { TranslatorPipe } from 'src/app/pipes/translator.pipe';

describe('ExperiencePageComponent', () => {
  let component: ExperiencePage;
  let fixture: ComponentFixture<ExperiencePage>;

  beforeEach(() => {
    const dataServiceStub = () => ({
      getResume: () => ({ subscribe: f => f({}) })
    });
    const localeServiceStub = () => ({
      localeChange: { subscribe: f => f({}) }
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ExperiencePage, TranslatorPipe],
      providers: [
        { provide: DataService, useFactory: dataServiceStub },
        { provide: LocaleService, useFactory: localeServiceStub }
      ]
    });
    spyOn(ExperiencePage.prototype, 'getResume');
    fixture = TestBed.createComponent(ExperiencePage);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  describe('constructor', () => {
    it('makes expected calls', () => {
      expect(ExperiencePage.prototype.getResume).toHaveBeenCalled();
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

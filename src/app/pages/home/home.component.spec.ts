import { TranslatorPipe } from './../../pipes/translator.pipe';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { LocaleService } from 'src/app/services/locale.service';
import { ROUTES } from './../../constants/routes.dictionary';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    const dataServiceStub = () => ({
      getResume: () => ({ subscribe: f => f({}) })
    });
    const localeServiceStub = () => ({
      localeChange: { subscribe: f => f({}) }
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [HomeComponent, TranslatorPipe],
      providers: [
        { provide: DataService, useFactory: dataServiceStub },
        { provide: LocaleService, useFactory: localeServiceStub }
      ],
    });
    spyOn(HomeComponent.prototype, 'getResume');
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`routes has default value`, () => {
    expect(component.routes).toEqual(ROUTES);
  });

  describe('constructor', () => {
    it('makes expected calls', () => {
      expect(HomeComponent.prototype.getResume).toHaveBeenCalled();
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

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Location } from '@angular/common';
import { LocaleService } from 'src/app/services/locale.service';
import { Router } from '@angular/router';
import { TranslatorService } from 'src/app/services/translator.service';
import { ROUTES } from './../../constants/routes.dictionary';
import { IMAGES } from './../../constants/images.dictionary';
import { HeaderComponent } from './header.component';
import { TranslatorPipe } from 'src/app/pipes/translator.pipe';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    const locationStub = () => ({ path: () => ({}) });
    const localeServiceStub = () => ({
      setLocale: value => ({}),
      getLocale: () => ({}),
      getAvailableLocales: () => ({})
    });
    const routerStub = () => ({ events: { subscribe: f => f({}) } });
    const translatorServiceStub = () => ({ translate: (key: string) => {} });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [HeaderComponent, TranslatorPipe],
      providers: [
        { provide: Location, useFactory: locationStub },
        { provide: LocaleService, useFactory: localeServiceStub },
        { provide: Router, useFactory: routerStub },
        { provide: TranslatorService, useFactory: translatorServiceStub }
      ]
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`routes has default value`, () => {
    expect(component.routes).toEqual(ROUTES);
  });

  it(`images has default value`, () => {
    expect(component.images).toEqual(IMAGES);
  });

  it(`navigationButton has default value`, () => {
    expect(component.navigationButton.length).toEqual(3);
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const locationStub: Location = fixture.debugElement.injector.get(
        Location
      );
      spyOn(locationStub, 'path').and.callThrough();
      component.ngOnInit();
      expect(locationStub.path).toHaveBeenCalled();
    });
  });

  describe('getCurrentLocale', () => {
    it('makes expected calls', () => {
      const localeServiceStub: LocaleService = fixture.debugElement.injector.get(
        LocaleService
      );
      spyOn(localeServiceStub, 'getLocale').and.callThrough();
      component.getCurrentLocale();
      expect(localeServiceStub.getLocale).toHaveBeenCalled();
    });
  });

  describe('getAvailableLocales', () => {
    it('makes expected calls', () => {
      const localeServiceStub: LocaleService = fixture.debugElement.injector.get(
        LocaleService
      );
      spyOn(localeServiceStub, 'getAvailableLocales').and.callThrough();
      component.getAvailableLocales();
      expect(localeServiceStub.getAvailableLocales).toHaveBeenCalled();
    });
  });
});

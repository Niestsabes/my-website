import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { LocaleService } from 'src/app/services/locale.service';
import { LocaleInterface } from 'src/app/models/locale.interface';
import { Router } from '@angular/router';
import { ROUTES } from './../../constants/routes.dictionary';
import { IMAGES } from './../../constants/images.dictionary';
import { TranslatorService } from 'src/app/services/translator.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public currentRoute: string;
  public routes = ROUTES;
  public images = IMAGES;
  public navigationButton = [
    { iconName: 'icon-home-solid',
      title: this._translateService.translate('home'),
      route: this.routes.app.home },
    { iconName: 'icon-address-card-solid',
      title: this._translateService.translate('experiences'),
      route: this.routes.app.experience },
    { iconName: 'icon-envelope-open-text-solid',
      title: this._translateService.translate('contact'),
      route: this.routes.app.contact }
  ]

  constructor(
    private _localeService: LocaleService,
    private _translateService: TranslatorService,
    private _router: Router,
    private _location: Location
  ) { }

  ngOnInit(): void {
    this._router.events.subscribe( value => {
      if (this._location.path() !== "") {
        this.currentRoute = this._location.path();
      }
      else this.currentRoute = "/";
    });
  }

  /**
   * @description Changes application's locale
   * @param value code of the language to set
   */
  public setLocale(value: string) {
    this._localeService.setLocale(value);
  }

  /**
   * @description Returns the current locale
   */
  public getCurrentLocale(): LocaleInterface {
    return this._localeService.getLocale();
  }

  /**
   * @description Return locales supported by the application
   * @return {LocaleInterface}
   */
  public getAvailableLocales() {
    return this._localeService.getAvailableLocales();
  }
}

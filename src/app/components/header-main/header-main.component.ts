import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { IMAGES } from 'src/app/constants/images.dictionary';
import { ROUTES } from 'src/app/constants/routes.dictionary';
import { LocaleInterface } from 'src/app/models/locale.interface';
import { LocaleService } from 'src/app/services/locale.service';
import { TranslatorService } from 'src/app/services/translator.service';

@Component({
    selector: 'app-header-main',
    templateUrl: './header-main.component.html',
    styleUrls: ['./header-main.component.scss'],
    standalone: false
})
export class HeaderMainComponent {
  
  public currentRoute: string;
  public readonly routes = ROUTES;
  public readonly images = IMAGES;

  public readonly mainNavigationButton = [
    { iconName: 'icon-home-solid',
      title: 'About me',
      route: this.routes.app.home },
    { iconName: 'icon-address-card-solid',
      title: 'Experiences',
      route: this.routes.app.experience },
    { iconName: 'icon-envelope-open-text-solid',
      title: 'Skills',
      route: this.routes.app.contact },
    { iconName: 'icon-envelope-open-text-solid',
      title: 'Contact',
      route: this.routes.app.contact }
  ];

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

import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { LocaleService } from 'src/app/services/locale.service';
import { LocaleInterface } from 'src/app/models/locale.interface';
import { Router } from '@angular/router';
import { ROUTES } from './../../constants/routes.dictionary';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public currentRoute: string;
  public navigationButton = [
    { iconName: 'icon-home-solid', route: ROUTES.app.home },
    { iconName: 'icon-address-card-solid', route: ROUTES.app.experience },
    { iconName: 'icon-envelope-open-text-solid', route: ROUTES.app.contact }
  ]

  constructor(
    private _localeService: LocaleService,
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

import { Injectable, Inject, LOCALE_ID } from '@angular/core';
import { LOCALES } from './../constants/locale.dictionary';
import { Subject } from 'rxjs';
import { LocaleInterface } from '../models/locale.interface';

@Injectable({
  providedIn: 'root'
})
export class LocaleService {

  public localeChange: Subject<LocaleInterface>;
  private _locale: LocaleInterface;
  private _defaultLocale: string

  constructor(
    @Inject(LOCALE_ID) public defaultLocale: string
  ) {
    this._defaultLocale = defaultLocale.substring(0, 2);
    this.localeChange = new Subject();
  }

  /**
   * @description Sets application current locale
   * @param value language code of the locale to set
   */
  public setLocale(value: string, forceReload: boolean = true): void {
    const matchLocale = LOCALES.find( locale => locale.id === value );
    if (matchLocale){
      this._locale = matchLocale;
      localStorage.setItem('localeId', this._locale.id);
      this.localeChange.next(this._locale);
      if (forceReload) {
        location.reload(true);
      }
    }
  }

  /**
   * @description Returns language code of the current locale
   * @returns language code of the current locale
   */
  public getLocale(): LocaleInterface {
    if (this._locale == null) {
      const defaultLocale = localStorage.getItem('localeId') ?
        localStorage.getItem('localeId') :
        this._defaultLocale;
      this.setLocale(defaultLocale, false);
    }
    return this._locale;
  }

  /**
   * @description Returns locales supported by the application
   * @returns Supported locales
   */
  public getAvailableLocales(): Array<LocaleInterface> {
    return LOCALES;
  }
}

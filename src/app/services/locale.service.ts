import { Injectable } from '@angular/core';
import { LOCALES } from './../constants/locale.dictionary';
import { Subject } from 'rxjs';
import { LocaleInterface } from '../models/locale.interface';

@Injectable({
  providedIn: 'root'
})
export class LocaleService {

  public localeChange: Subject<LocaleInterface>;
  private _locale: LocaleInterface;

  constructor() {
    this.localeChange = new Subject();
  }

  /**
   * @description Sets application current locale
   * @param value language code of the locale to set
   */
  public setLocale(value: string): void {
    const matchLocale = LOCALES.find( locale => locale.id === value );
    if (matchLocale){
      this._locale = matchLocale;
      this.localeChange.next(this._locale);
    }
  }

  /**
   * @description Returns language code of the current locale
   * @returns language code of the current locale
   */
  public getLocale(): LocaleInterface {
    return this._locale || LOCALES[0];
  }

  /**
   * @description Returns locales supported by the application
   * @returns Supported locales
   */
  public getAvailableLocales(): Array<LocaleInterface> {
    return LOCALES;
  }
}

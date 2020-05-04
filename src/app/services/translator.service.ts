import { Injectable } from '@angular/core';
import { LocaleService } from './locale.service';
import messagesEn from './../../locale/messages.en';
import messagesEs from './../../locale/messages.es';
import messagesFr from './../../locale/messages.fr';
import messagesJa from './../../locale/messages.ja';

@Injectable({
  providedIn: 'root'
})
export class TranslatorService {

  private _translations = {
    en: messagesEn,
    es: messagesEs,
    fr: messagesFr,
    ja: messagesJa
  }

  constructor(private _localeService: LocaleService) {}

  /** 
   * @description Translate a text with translate files
   * @param key key to find in the translation file
   * @returns translated text
   */
  public translate(key: string): string {
    if (this._translations[this._localeService.getLocale().id] != null) {
      return this._translations[this._localeService.getLocale().id][key];
    }
    return null;
  }
}

import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslatorService } from './translator.service';

@Injectable({
  providedIn: 'root'
})
export class MetadataService {

  constructor(
    private _titleService: Title,
    private _translateService: TranslatorService
  ) { }

  /**
   * Set application metadata by locale
   * @param localeId 
   */
  public updateMetadata(): void {
    this._titleService.setTitle(this._translateService.translate('metaTitle'));
    const metaDescription = document.querySelector('meta[name="description"]');
    metaDescription.setAttribute('content', this._translateService.translate('metaDescription'));
  }
}

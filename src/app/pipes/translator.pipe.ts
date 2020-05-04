import { Pipe, PipeTransform } from '@angular/core';
import { TranslatorService } from '../services/translator.service';

@Pipe({
  name: 'translate'
})
export class TranslatorPipe implements PipeTransform {

  constructor(private _translatorService: TranslatorService) {}

  transform(defaultText: string, key: string): string {
    const translation = this._translatorService.translate(key);
    return translation ? translation : defaultText;
  }

}

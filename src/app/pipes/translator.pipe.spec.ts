import { TranslatorService } from '../services/translator.service';
import { TranslatorPipe } from './translator.pipe';

describe('TranslatorPipe', () => {
  it('create an instance', () => {
    const fake = {translate: (key: string) => {}}
    const pipe = new TranslatorPipe(fake as TranslatorService);
    expect(pipe).toBeTruthy();
  });
});

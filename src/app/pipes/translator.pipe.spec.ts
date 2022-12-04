import { TestBed } from '@angular/core/testing';
import { TranslatorService } from '../services/translator.service';
import { TranslatorPipe } from './translator.pipe';

describe('TranslatorPipe', () => {
  let pipe: TranslatorPipe;

  beforeEach(() => {
    const translatorServiceStub = () => ({ translate: key => { return key ? 'Y' : null; } });
    TestBed.configureTestingModule({
      providers: [
        TranslatorPipe,
        { provide: TranslatorService, useFactory: translatorServiceStub }
      ]
    });
    pipe = TestBed.inject(TranslatorPipe);
  });

  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('translation transforms X to Y', () => {
    const defaultValue: any = 'A';
    const value: any = 'X';
    expect(pipe.transform(defaultValue, value)).toEqual('Y');
  });

  it('translation keeps default value', () => {
    const defaultValue: any = 'A';
    expect(pipe.transform(defaultValue, null)).toEqual('A');
  });
});

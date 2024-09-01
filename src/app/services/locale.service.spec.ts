import { TestBed } from '@angular/core/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { LocaleService } from './locale.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('LocaleService', () => {
  let service: LocaleService;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
});
    service = TestBed.inject(LocaleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

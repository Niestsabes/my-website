import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ROUTES } from 'src/app/constants/routes.dictionary';
import { TranslatorPipe } from 'src/app/pipes/translator.pipe';

import { ContactPage } from './contact.page';

describe('ContactPageComponent', () => {
  let component: ContactPage;
  let fixture: ComponentFixture<ContactPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ContactPage, TranslatorPipe]
    });
    fixture = TestBed.createComponent(ContactPage);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`routes has default value`, () => {
    expect(component.routes).toEqual(ROUTES);
  });
});

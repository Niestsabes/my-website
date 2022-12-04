import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ROUTES } from 'src/app/constants/routes.dictionary';
import { TranslatorPipe } from 'src/app/pipes/translator.pipe';

import { ContactPageComponent } from './contact-page.component';

describe('ContactPageComponent', () => {
  let component: ContactPageComponent;
  let fixture: ComponentFixture<ContactPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ContactPageComponent, TranslatorPipe]
    });
    fixture = TestBed.createComponent(ContactPageComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`routes has default value`, () => {
    expect(component.routes).toEqual(ROUTES);
  });
});
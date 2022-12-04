import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ROUTES } from './../../constants/routes.dictionary';
import { ContactPanelComponent } from './contact-panel.component';
import { TranslatorPipe } from 'src/app/pipes/translator.pipe';

describe('ContactPanelComponent', () => {
  let component: ContactPanelComponent;
  let fixture: ComponentFixture<ContactPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ContactPanelComponent, TranslatorPipe]
    });
    fixture = TestBed.createComponent(ContactPanelComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`routes has default value`, () => {
    expect(component.routes).toEqual(ROUTES);
  });
});

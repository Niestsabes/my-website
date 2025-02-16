import { Component } from '@angular/core';
import { ROUTES } from './../../constants/routes.dictionary';
import { IconComponent } from '../icon/icon.component';
import { RouterModule } from '@angular/router';
import { TranslatorPipe } from 'src/app/pipes/translator.pipe';

@Component({
    selector: 'app-contact-panel',
    templateUrl: './contact-panel.component.html',
    styleUrls: ['./contact-panel.component.scss'],
	imports: [
		IconComponent,
		RouterModule,
		TranslatorPipe
	]
})
export class ContactPanelComponent {

  public routes = ROUTES;

}

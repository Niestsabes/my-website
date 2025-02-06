import { Component, ViewChild, ElementRef } from '@angular/core';
import { UntypedFormGroup, Validators, FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ROUTES } from './../../constants/routes.dictionary';
import { IconComponent } from 'src/app/components/icon/icon.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { TranslatorPipe } from 'src/app/pipes/translator.pipe';
import { ContactPanelComponent } from 'src/app/components/contact-panel/contact-panel.component';

@Component({
    selector: 'app-contact-page',
    templateUrl: './contact.page.html',
    styleUrls: ['./contact.page.scss'],
	imports: [
		IconComponent,
		HeaderComponent,
		TranslatorPipe,
		ContactPanelComponent,
		ReactiveFormsModule,
		FormsModule
	]
})
export class ContactPage {

	/** @description reference to the form element in the template */
	@ViewChild('contactFormElement', {static: false}) protected readonly contactFormElement: ElementRef;

	/** @description form control handling mails */
	public readonly contactForm: UntypedFormGroup = new UntypedFormGroup({
		firstName: new FormControl<string>(undefined, [Validators.required]),
		lastName: new FormControl<string>(undefined, [Validators.required]),
		email: new FormControl<string>(undefined, [Validators.required, Validators.email]),
		object: new FormControl<string>(undefined, [Validators.required]),
		message: new FormControl<string>(undefined, [Validators.required])
	});

	/** @description list application's routes */
	public routes = ROUTES;

	/** @description tells if the form has been sumbitted at least once */
	private _isFormSubmitted = false;

	/**
	 * @description If mailForm is validated, asks backend to send a mail.
	 * @listens (ngSubmit) when mailForm is submitted.
	 */
	public sendEmail(): void {
		this._isFormSubmitted = true;

		if ( this.contactForm.valid ) {
		this.contactFormElement.nativeElement.submit();
		}
	}

	/**
	 * @description Checks if the form has been submitted once but the given field is invalid
	 * @param fieldName
	 * @returns TRUE if the condition is verified
	 */
	public isFieldInvalid(fieldName: string): boolean {
		return this._isFormSubmitted && this.contactForm.controls[fieldName].invalid;
	}

	/**
	 * @description Checks if the form has been submitted once but is invalid
	 * @returns TRUE if the condition is verified
	 */
	public isFormInvalid(): boolean {
		return this._isFormSubmitted && this.contactForm.invalid;
	}

}

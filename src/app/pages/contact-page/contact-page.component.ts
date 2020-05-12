import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ROUTES } from './../../constants/routes.dictionary';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  /** @description reference to the form element in the template */
  @ViewChild('contactFormElement', {static: false}) protected readonly contactFormElement: ElementRef;
  
  /** @description form control handling mails */
  public readonly contactForm: FormGroup = new FormGroup({
    firstName: new FormControl(undefined, [Validators.required]),
    lastName: new FormControl(undefined, [Validators.required]),
    email: new FormControl(undefined, [Validators.required, Validators.email]),
    object: new FormControl(undefined, [Validators.required]),
    message: new FormControl(undefined, [Validators.required])
  });

  /** @description list application's routes */
  public routes = ROUTES;

  /** @description tells if the form has been sumbitted at least once */
  private _isFormSubmitted = false;

  constructor() { }

  ngOnInit(): void {
  }

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

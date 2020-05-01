import { Component, OnInit } from '@angular/core';
import { ROUTES } from './../../constants/routes.dictionary';

@Component({
  selector: 'app-contact-panel',
  templateUrl: './contact-panel.component.html',
  styleUrls: ['./contact-panel.component.scss']
})
export class ContactPanelComponent implements OnInit {

  /** @description list application's routes */
  public routes = ROUTES;

  constructor() { }

  ngOnInit(): void {
  }

}

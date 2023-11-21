import { Component, OnInit } from '@angular/core';
import { ROUTES } from './../../constants/routes.dictionary';

@Component({
  selector: 'app-title-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {

  /** @description list application's routes */
  public routes = ROUTES;

  constructor() {}

  ngOnInit(): void {}
}

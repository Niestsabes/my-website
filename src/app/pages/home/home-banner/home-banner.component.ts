import { Component, OnInit } from '@angular/core';
import { ROUTES } from 'src/app/constants/routes.dictionary';
import { IMAGES } from 'src/app/constants/images.dictionary';

@Component({
  selector: 'app-home-banner',
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.scss'],
})
export class HomeBannerComponent implements OnInit {

  public readonly routes = ROUTES;
  public readonly images = IMAGES;

  constructor() {}

  ngOnInit(): void {}
}

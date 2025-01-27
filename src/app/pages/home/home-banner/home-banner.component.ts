import { Component, OnInit } from '@angular/core';
import { ROUTES } from 'src/app/constants/routes.dictionary';
import { IMAGES } from 'src/app/constants/images.dictionary';
import { DataService } from 'src/app/services/data.service';
import { ResumeInterface } from 'src/app/models/resume.interface';

@Component({
    selector: 'app-home-banner',
    templateUrl: './home-banner.component.html',
    styleUrls: ['./home-banner.component.scss'],
    standalone: false
})
export class HomeBannerComponent {

  public readonly routes = ROUTES;
  public readonly images = IMAGES;

  constructor(private _data: DataService) { }

  get data(): ResumeInterface {
    return this._data.resume;
  }
}

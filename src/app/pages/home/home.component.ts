import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { LocaleService } from 'src/app/services/locale.service';
import { ROUTES } from './../../constants/routes.dictionary';
import { IMAGES } from 'src/app/constants/images.dictionary';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: false
})
export class HomeComponent {

  public readonly routes = ROUTES;
  public readonly images = IMAGES;

  constructor(
    public dataService: DataService,
    private _localeService: LocaleService
  ) {
    this._localeService.localeChange.subscribe(
      _ => { this.getResume(); }
    );
    this.getResume();
  }

  public getResume(): void {
    this.dataService.getResume().subscribe();
  }
}

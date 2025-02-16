import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { LocaleService } from 'src/app/services/locale.service';
import { ROUTES } from '../../constants/routes.dictionary';
import { IMAGES } from 'src/app/constants/images.dictionary';
import { HomeAboutComponent } from './home-about/home-about.component';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { HomeExperiencesComponent } from './home-experiences/home-experiences.component';
import { HomePortefolioComponent } from './home-portefolio/home-portefolio.component';
import { HomePresentationComponent } from './home-presentation/home-presentation.component';
import { HomeRolesComponent } from './home-roles/home-roles.component';

@Component({
    selector: 'app-home',
	imports: [
        HomeBannerComponent,
		HomeExperiencesComponent,
		HomePresentationComponent,
		HomeAboutComponent,
		HomePortefolioComponent,
		HomeRolesComponent,
	],
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export class HomePage {

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

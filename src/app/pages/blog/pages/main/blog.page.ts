import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ROUTES } from '@angular/router';
import { IMAGES } from 'src/app/constants/images.dictionary';
import { DataService } from 'src/app/services/data.service';
import { LocaleService } from 'src/app/services/locale.service';
import { BlogSummaryComponent } from './blog-summary/blog-summary.component';
import { BlogBannerComponent } from '../../components/banner/blog-banner.component';

@Component({
	selector: 'app-blog',
	templateUrl: './blog.page.html',
	imports: [
		BlogBannerComponent,
		BlogSummaryComponent
	],
	styles: `
		:host {
			display: block;
		}
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogPage {
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

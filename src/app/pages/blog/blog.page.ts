import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ROUTES } from '@angular/router';
import { IMAGES } from 'src/app/constants/images.dictionary';
import { DataService } from 'src/app/services/data.service';
import { LocaleService } from 'src/app/services/locale.service';
import { BlogArticleContainerComponent } from './blog-article-container/blog-article-container.component';
import { HeaderMainComponent } from 'src/app/components/header-main/header-main.component';

@Component({
	selector: 'app-blog',
	templateUrl: './blog.page.html',
	imports: [
		HeaderMainComponent,
		BlogArticleContainerComponent,
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

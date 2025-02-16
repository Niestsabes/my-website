import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BlogArticleContainerComponent } from './blog-article-container/blog-article-container.component';
import { BlogBannerComponent } from '../../components/banner/blog-banner.component';

@Component({
	selector: 'app-blog-article',
	imports: [BlogArticleContainerComponent, BlogBannerComponent],
	templateUrl: './blog-article.page.html',
	styles: [`
		:host {
			display: block;
		}
	`],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogArticlePage {}

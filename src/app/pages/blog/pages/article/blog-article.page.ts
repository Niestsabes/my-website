import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { BlogArticleContainerComponent } from './blog-article-container/blog-article-container.component';
import { BlogBannerComponent } from '../../components/banner/blog-banner.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { map, switchMap, tap } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { TranslatorPipe } from "../../../../pipes/translator.pipe";
import { ResumeInterface } from 'src/app/models/resume.interface';
import { BlogArticle, BlogInterface } from 'src/app/models/blog.interface';

@Component({
	selector: 'app-blog-article',
	imports: [BlogArticleContainerComponent, BlogBannerComponent, TranslatorPipe, RouterModule],
	templateUrl: './blog-article.page.html',
	styles: [`
		:host {
			display: block;
		}
	`],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogArticlePage {
	readonly blogData = toSignal<ResumeInterface | null>(
		inject(DataService).getResume(),
		{ initialValue: null }
	);

	readonly article = toSignal<BlogArticle | null | undefined>(
		inject(ActivatedRoute).params.pipe(
			switchMap(({ id }) =>
				inject(DataService).getBlog().pipe(
					map(data => data.articles.find(article => article.id === id) ?? null)
				)
			)
		),
		{ initialValue: undefined }
	)
}

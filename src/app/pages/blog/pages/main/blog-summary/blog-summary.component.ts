import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterModule } from '@angular/router';
import { BlogArticle, BlogCategory, BlogInterface } from 'src/app/models/blog.interface';
import { DataService } from 'src/app/services/data.service';
import { TranslatorPipe } from "../../../../../pipes/translator.pipe";

@Component({
  selector: 'app-blog-summary',
  imports: [
    CommonModule,
    RouterModule,
    TranslatorPipe
],
  templateUrl: './blog-summary.component.html',
  styleUrls: ['./blog-summary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogSummaryComponent {

	readonly blogData = toSignal<BlogInterface | null>(
		inject(DataService).getBlog(),
		{ initialValue: null }
	);

	readonly categories = computed<BlogCategory[]>(() => {
		return this.blogData()?.categories ?? [];
	});

	readonly articles = computed<BlogArticle[]>(() => {
		const articles = this.blogData()?.articles ?? [];
		if (this.selectedCategory() === null) {
			return articles;
		}
		return articles.filter((article) => article.category === this.selectedCategory().id);
	});

	readonly latestArticles = computed<BlogArticle[]>(() => {
		return this.articles().slice(0, 4);
	});

	readonly selectedCategory = signal<BlogCategory | null>(null);

	selectCategory(category: BlogCategory | null) {
		this.selectedCategory.set(category);
	}
}

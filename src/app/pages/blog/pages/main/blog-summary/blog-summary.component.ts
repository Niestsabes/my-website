import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterModule } from '@angular/router';
import { BlogCategory, BlogInterface } from 'src/app/models/blog.interface';
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

	latestArticles = signal<any[]>([
		{
			id: 1,
			title: 'Titre A',
			subtitle: 'Subtitle A',
			summary: 'Summary A',
			date: '2021-01-01',
			category: 'A',
			thumbnail: 'assets/images/taste-spicy-food.webp',
			thumbnailAlt: 'A little thrumbanail',
			url: '/blog/article-a',
		},
		{
			id: 2,
			title: 'Titre B',
			subtitle: 'Subtitle B',
			summary: 'Summary B',
			date: '2021-01-01',
			category: 'B',
			thumbnail: 'assets/images/taste-spicy-food.webp',
			thumbnailAlt: 'A little thrumbanail',
			url: '/blog/article-a',
		},
		{
			id: 3,
			title: 'Titre C',
			subtitle: 'Subtitle C',
			summary: 'Summary C',
			date: '2021-01-01',
			category: 'C',
			thumbnail: 'assets/images/taste-spicy-food.webp',
			thumbnailAlt: 'A little thrumbanail',
			url: '/blog/article-a',
		},
		{
			id: 4,
			title: 'Titre D',
			subtitle: 'Subtitle D',
			summary: 'Summary D',
			date: '2021-01-01',
			category: 'D',
			thumbnail: 'assets/images/taste-spicy-food.webp',
			thumbnailAlt: 'A little thrumbanail',
			url: '/blog/article-a',
		}
	]);

	readonly blogData = toSignal<BlogInterface | null>(
		inject(DataService).getBlog(),
		{ initialValue: null }
	);

	readonly categories = computed<BlogCategory[]>(() => {
		return this.blogData()?.categories ?? [];
	});

	readonly selectedCategory = signal<BlogCategory | null>(null);

	selectCategory(category: BlogCategory | null) {
		this.selectedCategory.set(category);
	}
}

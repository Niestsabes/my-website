import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

@Component({
	selector: 'app-blog-article-container',
	templateUrl: './blog-article-container.component.html',
	styles: `
		:host {
			display: block;
		}
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [
		CommonModule,
		MarkdownModule
	]
})
export class BlogArticleContainerComponent {

	public readonly titles = signal<string[]>([]);

	public onArticleLoaded(text: string): void {
		this.titles.set(
		text.split('\n')
			.filter(line => line.trim().startsWith('## '))
			.map(line => line.trim().replace('## ', ''))
		);
	}
}

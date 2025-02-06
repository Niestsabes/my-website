import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-blog-article-container',
  templateUrl: './blog-article-container.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogArticleContainerComponent {

  titles = signal<string[]>([]);

  onArticleLoaded(text: string): void {
    this.titles.set(
      text.split('\n')
        .filter(line => line.trim().startsWith('## '))
        .map(line => line.trim().replace('## ', ''))
    );
  }
}

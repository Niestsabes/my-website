import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { BlogSummaryComponent } from './blog-summary/blog-summary.component';
import { BlogBannerComponent } from '../../components/banner/blog-banner.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { DataService } from 'src/app/services/data.service';
import { ResumeInterface } from 'src/app/models/resume.interface';

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
	readonly blogData = toSignal<ResumeInterface | null>(
		inject(DataService).getResume(),
		{ initialValue: null }
	);
}

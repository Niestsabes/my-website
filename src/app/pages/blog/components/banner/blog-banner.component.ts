import { Component } from '@angular/core';
import { TranslatorPipe } from "../../../../pipes/translator.pipe";

@Component({
    selector: 'app-blog-banner',
    templateUrl: './blog-banner.component.html',
    styleUrls: ['./blog-banner.component.scss'],
    imports: [TranslatorPipe],
})
export class BlogBannerComponent {
}

import { Component, inject } from '@angular/core';
import { ROUTES } from 'src/app/constants/routes.dictionary';
import { ResumeInterface } from 'src/app/models/resume.interface';
import { DataService } from 'src/app/services/data.service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {

	public readonly ROUTES = ROUTES;

	private readonly _data = inject(DataService);

	public scrollToTop() {
		window.scrollTo(0, 0);
	}

	get data(): ResumeInterface {
		return this._data.resume;
	}

	get year(): number {
		return new Date().getFullYear();
	}
}

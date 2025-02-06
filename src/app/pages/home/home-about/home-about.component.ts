import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { IMAGES } from 'src/app/constants/images.dictionary';
import { ResumeInterface } from 'src/app/models/resume.interface';
import { DataService } from 'src/app/services/data.service';

@Component({
    selector: 'app-home-about',
    templateUrl: './home-about.component.html',
    styleUrls: ['./home-about.component.scss'],
	imports: [
		CommonModule
	]
})
export class HomeAboutComponent {

	public readonly images = IMAGES;

	private readonly _data = inject(DataService);

	get data(): ResumeInterface {
		return this._data.resume;
	}
}

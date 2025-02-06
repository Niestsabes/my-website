import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ResumeInterface } from 'src/app/models/resume.interface';
import { DataService } from 'src/app/services/data.service';

@Component({
    selector: 'app-home-presentation',
    templateUrl: './home-presentation.component.html',
    styleUrls: ['./home-presentation.component.scss'],
	imports: [
		CommonModule
	]
})
export class HomePresentationComponent {

	private readonly _data = inject(DataService);

	get data(): ResumeInterface {
		return this._data.resume;
	}
}

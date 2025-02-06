import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ResumeInterface } from 'src/app/models/resume.interface';
import { DataService } from 'src/app/services/data.service';

@Component({
    selector: 'app-home-experiences',
    templateUrl: './home-experiences.component.html',
    styleUrls: ['./home-experiences.component.scss'],
	imports: [
		CommonModule
	]
})
export class HomeExperiencesComponent {
	public accordionOpenedIndex: number = -1;

	private readonly _data = inject(DataService);

	public toggleAccordion(index: number): void {
		this.accordionOpenedIndex = this.accordionOpenedIndex === index ? -1 : index;
	}

	get data(): ResumeInterface {
		return this._data.resume;
	}
}

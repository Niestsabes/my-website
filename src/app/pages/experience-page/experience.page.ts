import { Component, inject, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { LocaleService } from 'src/app/services/locale.service';
import { Resume } from 'src/app/models/resume';
import { ContactPanelComponent } from 'src/app/components/contact-panel/contact-panel.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { IconComponent } from 'src/app/components/icon/icon.component';
import { TranslatorPipe } from 'src/app/pipes/translator.pipe';

@Component({
    selector: 'app-experience-page',
    templateUrl: './experience.page.html',
    styleUrls: ['./experience.page.scss'],
	imports: [
		IconComponent,
		HeaderComponent,
		TranslatorPipe,
		ContactPanelComponent
	]
})
export class ExperiencePage implements OnInit {

  	public resume: Resume = new Resume();

	private readonly _dataService = inject(DataService);
	private readonly _localeService = inject(LocaleService);

	ngOnInit(): void {
		this._localeService.localeChange.subscribe({
			next: _ => { this.getResume(); }
		});
		this.getResume();
	}

	/**
	 * @description Retrieve resume from api
	 */
	public getResume(): void {
		this._dataService.getResume().subscribe( value => this.resume.setData(value));
	}

	public computeDateFormat(startDate: string, endDate: string) {
		if (!endDate) {
			return startDate;
		}
		else {
			return startDate + ' to ' + endDate;
		}
	}

	/**
	 * @description Formats displayed description of a skill
	 * @param description
	 * @returns text to display
	 */
	public printSkillDescription(description: Array<string>): string {
		return description.join(', ');
	}
}

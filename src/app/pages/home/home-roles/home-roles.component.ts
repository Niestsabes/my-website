import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ResumeInterface } from 'src/app/models/resume.interface';
import { DataService } from 'src/app/services/data.service';

@Component({
    selector: 'app-home-roles',
    templateUrl: './home-roles.component.html',
    styleUrls: ['./home-roles.component.scss'],
	imports: [
		CommonModule
	]
})
export class HomeRolesComponent {

	private readonly _data = inject(DataService);

	get data(): ResumeInterface {
		return this._data.resume;
	}
}

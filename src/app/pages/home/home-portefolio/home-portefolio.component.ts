import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ResumeInterface } from 'src/app/models/resume.interface';
import { TranslatorPipe } from 'src/app/pipes/translator.pipe';
import { DataService } from 'src/app/services/data.service';

@Component({
    selector: 'app-home-portefolio',
    templateUrl: './home-portefolio.component.html',
    styleUrls: ['./home-portefolio.component.scss'],
	imports: [
		TranslatorPipe,
		CommonModule
	]
})
export class HomePortefolioComponent {

    private readonly _data = inject(DataService);

    get data(): ResumeInterface {
        return this._data.resume;
    }
}

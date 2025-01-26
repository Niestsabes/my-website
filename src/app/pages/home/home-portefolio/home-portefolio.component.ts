import { Component } from '@angular/core';
import { ResumeInterface } from 'src/app/models/resume.interface';
import { DataService } from 'src/app/services/data.service';

@Component({
    selector: 'app-home-portefolio',
    templateUrl: './home-portefolio.component.html',
    styleUrls: ['./home-portefolio.component.scss'],
    standalone: false
})
export class HomePortefolioComponent {
  
  constructor(private _data: DataService) { }

  get data(): ResumeInterface {
    return this._data.resume;
  }
}

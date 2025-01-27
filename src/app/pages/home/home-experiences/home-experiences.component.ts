import { Component } from '@angular/core';
import { ResumeInterface } from 'src/app/models/resume.interface';
import { DataService } from 'src/app/services/data.service';

@Component({
    selector: 'app-home-experiences',
    templateUrl: './home-experiences.component.html',
    styleUrls: ['./home-experiences.component.scss'],
    standalone: false
})
export class HomeExperiencesComponent {
  public accordionOpenedIndex: number = -1;

  public toggleAccordion(index: number): void {
    this.accordionOpenedIndex = this.accordionOpenedIndex === index ? -1 : index;
  }
  
  constructor(private _data: DataService) { }

  get data(): ResumeInterface {
    return this._data.resume;
  }
}

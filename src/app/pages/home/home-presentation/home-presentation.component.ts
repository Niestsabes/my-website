import { Component } from '@angular/core';
import { Resume } from 'src/app/models/resume';
import { ResumeInterface } from 'src/app/models/resume.interface';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home-presentation',
  templateUrl: './home-presentation.component.html',
  styleUrls: ['./home-presentation.component.scss']
})
export class HomePresentationComponent {
  
  constructor(private _data: DataService) { }

  get data(): ResumeInterface {
    return this._data.resume;
  }
}

import { Component, Input } from '@angular/core';
import { IMAGES } from 'src/app/constants/images.dictionary';
import { Resume } from 'src/app/models/resume';
import { ResumeInterface } from 'src/app/models/resume.interface';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home-about',
  templateUrl: './home-about.component.html',
  styleUrls: ['./home-about.component.scss']
})
export class HomeAboutComponent {
  public readonly images = IMAGES;
  
  constructor(private _data: DataService) { }

  get data(): ResumeInterface {
    return this._data.resume;
  }
}

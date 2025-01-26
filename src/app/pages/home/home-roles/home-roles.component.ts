import { Component } from '@angular/core';
import { ResumeInterface } from 'src/app/models/resume.interface';
import { DataService } from 'src/app/services/data.service';

@Component({
    selector: 'app-home-roles',
    templateUrl: './home-roles.component.html',
    styleUrls: ['./home-roles.component.scss'],
    standalone: false
})
export class HomeRolesComponent {  
  constructor(private _data: DataService) { }

  get data(): ResumeInterface {
    return this._data.resume;
  }
}

import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { LocaleService } from 'src/app/services/locale.service';
import { Resume } from 'src/app/models/resume';

@Component({
  selector: 'app-experience-page',
  templateUrl: './experience-page.component.html',
  styleUrls: ['./experience-page.component.scss']
})
export class ExperiencePageComponent implements OnInit {

  public resume: Resume = new Resume();

  constructor(
    private _dataService: DataService,
    private _localeService: LocaleService
  ) {
    this._localeService.localeChange.subscribe(
      _ => { this.getResume(); }
    );
    this.getResume();
  }

  ngOnInit(): void { }

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

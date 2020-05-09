import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { LocaleService } from 'src/app/services/locale.service';
import { Resume } from 'src/app/models/resume';
import { ROUTES } from './../../constants/routes.dictionary';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public routes = ROUTES;
  public resume: Resume = new Resume();

  constructor(
    public dataService: DataService,
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
    this.dataService.getResume().subscribe( value => this.resume.setData(value));
  }
}

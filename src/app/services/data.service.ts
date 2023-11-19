import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResumeInterface } from '../models/resume.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ROUTES } from '../constants/routes.dictionary';
import { LocaleService } from './locale.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _resume: ResumeInterface;

  constructor(
    private _http: HttpClient,
    private _localeService: LocaleService
  ) { }

  /**
   * @description Retrieve resume from data storage
   */
  public getResume(): Observable<ResumeInterface> {
    return this._http.get<ResumeInterface>(
      `${ROUTES.api.root}/${this._localeService.getLocale().id}/${ROUTES.api.paths.resume}`
    ).pipe(
      map( resume => {
        this._resume = resume;
        return resume;
      })
    )
  }

  get resume(): ResumeInterface {
    return this._resume;
  }
}

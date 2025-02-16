import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResumeInterface } from '../models/resume.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ROUTES } from '../constants/routes.dictionary';
import { LocaleService } from './locale.service';
import { BlogInterface } from '../models/blog.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

	private _resume: ResumeInterface;
	private _blog: BlogInterface;

	private readonly _http = inject(HttpClient);
	private readonly _localeService = inject(LocaleService);

	/**
	 * @description Retrieve resume from data storage
	 */
	public getResume(): Observable<ResumeInterface> {
		return this._http.get<ResumeInterface>(
			`${ROUTES.api.root}/${this._localeService.getLocale().id}/${ROUTES.api.paths.resume}`
		).pipe(
			map(resume => {
				this._resume = resume;
				return resume;
			})
		);
	}

	/**
	 * @description Retrieve blog from data storage
	 */
	public getBlog(): Observable<BlogInterface> {
		return this._http.get<BlogInterface>(
			`${ROUTES.api.root}/${this._localeService.getLocale().id}/${ROUTES.api.paths.blog}`
		).pipe(
			map(blog => {
				this._blog = blog;
				return blog;
			})
		)
	}

	get resume(): ResumeInterface {
		return this._resume;
	}

	get blog(): BlogInterface {
		return this._blog;
	}
}

import { Component, inject, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { LocaleService } from 'src/app/services/locale.service';
import { LocaleInterface } from 'src/app/models/locale.interface';
import { ROUTES } from 'src/app/constants/routes.dictionary';
import { IMAGES } from 'src/app/constants/images.dictionary';
import { TranslatorService } from 'src/app/services/translator.service';
import { DataService } from 'src/app/services/data.service';
import { ResumeInterface } from 'src/app/models/resume.interface';
import { IconComponent } from '../icon/icon.component';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
	imports: [
		IconComponent,
		RouterModule,
		CommonModule
	]
})
export class HeaderComponent implements OnInit {

	public currentRoute: string;
	public routes = ROUTES;
	public images = IMAGES;

	private readonly _localeService = inject(LocaleService);
	private readonly _translateService = inject(TranslatorService);
	private readonly _router = inject(Router);
	private readonly _location = inject(Location);
	private readonly _data = inject(DataService);

	public navigationButton = [
		{ iconName: 'icon-home-solid',
			title: this._translateService.translate('home'),
			route: this.routes.app.home },
		{ iconName: 'icon-address-card-solid',
			title: this._translateService.translate('experiences'),
			route: this.routes.app.experience },
		{ iconName: 'icon-envelope-open-text-solid',
			title: this._translateService.translate('sendMail'),
			route: this.routes.app.contact }
	]

	get data(): ResumeInterface {
		return this._data.resume;
	}

	ngOnInit(): void {
		this._router.events.subscribe( value => {
		if (this._location.path() !== "") {
			this.currentRoute = this._location.path();
		}
		else this.currentRoute = "/";
		});
	}

	/**
	 * @description Changes application's locale
	 * @param value code of the language to set
	 */
	public setLocale(value: string) {
		this._localeService.setLocale(value);
	}

	/**
	 * @description Returns the current locale
	 */
	public getCurrentLocale(): LocaleInterface {
		return this._localeService.getLocale();
	}

	/**
	 * @description Return locales supported by the application
	 * @return {LocaleInterface}
	 */
	public getAvailableLocales() {
		return this._localeService.getAvailableLocales();
	}
}

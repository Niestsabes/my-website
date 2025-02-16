import { Component, OnInit, inject } from '@angular/core';
import { LocaleService } from './services/locale.service';
import { MetadataService } from './services/metadata.service';
import { Router, RouterModule } from '@angular/router';
import { Analytics } from '@angular/fire/analytics';
import { logEvent } from 'firebase/analytics';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderMainComponent } from './components/header-main/header-main.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	imports: [
		HeaderMainComponent,
		FooterComponent,
		RouterModule
	]
})
export class AppComponent implements OnInit {
	// private readonly _analytics = inject(Analytics);
	private readonly _localeService = inject(LocaleService);
	private readonly _metadataService = inject(MetadataService);
	private readonly _router = inject(Router);

	ngOnInit() {
		this._localeService.loadLocale();
		this._metadataService.updateMetadata();

		this._localeService.localeChange.subscribe(() => {
		this._router.navigate([this._router.url],{skipLocationChange:true});
		});

		// logEvent(this._analytics, 'app_open');
	}
}

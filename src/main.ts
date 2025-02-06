import { ApplicationConfig, enableProdMode } from '@angular/core';

import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi, HttpClient } from '@angular/common/http';
import { ScreenTrackingService, provideAnalytics } from '@angular/fire/analytics';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getAnalytics } from 'firebase/analytics';
import { provideMarkdown } from 'ngx-markdown';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

if (environment.production) {
  enableProdMode();
}

const appConfig : ApplicationConfig = {
	providers: [
		ScreenTrackingService,
        provideRouter(routes),
		provideHttpClient(withInterceptorsFromDi()),
		// provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
		provideAnalytics(() => getAnalytics()),
		provideMarkdown({ loader: HttpClient }),
	]
};

bootstrapApplication(AppComponent, appConfig).catch(err => console.error(err));

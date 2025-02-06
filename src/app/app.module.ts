import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { ScreenTrackingService, getAnalytics, provideAnalytics } from '@angular/fire/analytics';

import { AppRoutingModule } from './app-routing.module';
import { environment } from 'src/environments/environment';

import { AppComponent } from './app.component';
import { HomePage } from './pages/home/home.page';
import { ExperiencePage } from './pages/experience-page/experience.page';
import { ContactPage } from './pages/contact-page/contact.page';
import { MarkdownModule, provideMarkdown } from 'ngx-markdown';
import { BlogPage } from './pages/blog/blog.page';

@NgModule({
    imports: [
		AppComponent,
        HomePage,
        BlogPage,
        ContactPage,
        ExperiencePage,
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        MarkdownModule.forRoot(),
    ],
    providers: [
        ScreenTrackingService,
        provideHttpClient(withInterceptorsFromDi()),
        provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
        provideAnalytics(() => getAnalytics()),
        provideMarkdown({ loader: HttpClient }),
    ]
})
export class AppModule { }

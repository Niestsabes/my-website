import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { ScreenTrackingService, getAnalytics, provideAnalytics } from '@angular/fire/analytics';

import { AppRoutingModule } from './app-routing.module';
import { environment } from 'src/environments/environment';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { IconComponent } from './components/icon/icon.component';
import { HomeComponent } from './pages/home/home.component';
import { ExperiencePageComponent } from './pages/experience-page/experience-page.component';
import { HomeBannerComponent } from './pages/home/home-banner/home-banner.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ContactPanelComponent } from './components/contact-panel/contact-panel.component';
import { TranslatorPipe } from './pipes/translator.pipe';
import { HeaderMainComponent } from './components/header-main/header-main.component';
import { HomeExperiencesComponent } from './pages/home/home-experiences/home-experiences.component';
import { HomePresentationComponent } from './pages/home/home-presentation/home-presentation.component';
import { HomeAboutComponent } from './pages/home/home-about/home-about.component';
import { HomePortefolioComponent } from './pages/home/home-portefolio/home-portefolio.component';
import { HomeRolesComponent } from './pages/home/home-roles/home-roles.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        IconComponent,
        HomeComponent,
        ExperiencePageComponent,
        HomeBannerComponent,
        ContactPageComponent,
        ContactPanelComponent,
        TranslatorPipe,
        HeaderMainComponent,
        HomeExperiencesComponent,
        HomePresentationComponent,
        HomeAboutComponent,
        HomePortefolioComponent,
        HomeRolesComponent
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
    ],
    providers: [
        ScreenTrackingService,
        provideHttpClient(withInterceptorsFromDi()),
        provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
        provideAnalytics(() => getAnalytics())
    ]
})
export class AppModule { }

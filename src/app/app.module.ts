import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { IconComponent } from './components/icon/icon.component';
import { HomeComponent } from './pages/home/home.component';
import { ExperiencePageComponent } from './pages/experience-page/experience-page.component';
import { HomeBannerComponent } from './pages/home/home-banner/home-banner.component';
import { FooterComponent } from './components/footer/footer.component';
import { GaugeComponent } from './components/gauge/gauge.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ContactPanelComponent } from './components/contact-panel/contact-panel.component';
import { CircleGaugeComponent } from './components/circle-gauge/circle-gauge.component';
import { TranslatorPipe } from './pipes/translator.pipe';
import { StarGaugeComponent } from './components/star-gauge/star-gauge.component';
import { SubtitleBannerComponent } from './components/subtitle-banner/subtitle-banner.component';
import { HeaderMainComponent } from './components/header-main/header-main.component';
import { HomeAssetsComponent } from './pages/home/home-assets/home-assets.component';
import { HomeExperiencesComponent } from './pages/home/home-experiences/home-experiences.component';
import { HomePresentationComponent } from './pages/home/home-presentation/home-presentation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IconComponent,
    HomeComponent,
    ExperiencePageComponent,
    HomeBannerComponent,
    GaugeComponent,
    ContactPageComponent,
    ContactPanelComponent,
    CircleGaugeComponent,
    StarGaugeComponent,
    TranslatorPipe,
    SubtitleBannerComponent,
    HeaderMainComponent,
    HomeAssetsComponent,
    HomeExperiencesComponent,
    HomePresentationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
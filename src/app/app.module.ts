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
import { BannerComponent } from './components/banner/banner.component';
import { FooterComponent } from './components/footer/footer.component';
import { GaugeComponent } from './components/gauge/gauge.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ContactPanelComponent } from './components/contact-panel/contact-panel.component';
import { CircleGaugeComponent } from './components/circle-gauge/circle-gauge.component';
import { TranslatorPipe } from './pipes/translator.pipe';
import { StarGaugeComponent } from './components/star-gauge/star-gauge.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IconComponent,
    HomeComponent,
    ExperiencePageComponent,
    BannerComponent,
    GaugeComponent,
    ContactPageComponent,
    ContactPanelComponent,
    CircleGaugeComponent,
    TranslatorPipe,
    StarGaugeComponent
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
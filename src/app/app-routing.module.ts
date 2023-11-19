import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ExperiencePageComponent } from './pages/experience-page/experience-page.component';
import { ROUTES } from './constants/routes.dictionary';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';

const routes: Routes = [
  { path: ROUTES.app.home.substr(1), component: HomeComponent },
  // { path: ROUTES.app.experience.substr(1), component: ExperiencePageComponent, pathMatch: 'full' },
  // { path: ROUTES.app.contact.substr(1), component: ContactPageComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

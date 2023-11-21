import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ROUTES } from './constants/routes.dictionary';

const routes: Routes = [
  {
    path: ROUTES.app.home.substr(1),
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		loadComponent: () => import('./pages/home/home.page').then(m => m.HomePage)
	},
	{
		path: 'blog',
		loadComponent: () => import('./pages/blog/pages/main/blog.page').then(m => m.BlogPage)
	},
	{
		path: '**',
		redirectTo: '',
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes, {})],
	exports: [RouterModule]
})
export class AppRoutingModule { }

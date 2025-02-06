import { Routes } from '@angular/router';

export const routes: Routes = [
    {
		path: '',
		loadComponent: () => import('./pages/home/home.page').then(m => m.HomePage)
	},
	{
		path: 'blog',
		loadComponent: () => import('./pages/blog/blog.page').then(m => m.BlogPage)
	},
	{
		path: '**',
		redirectTo: '',
	}
];

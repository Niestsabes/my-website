import { Routes } from '@angular/router';
import { BLOG_ROUTES } from './pages/blog/blog.routes';

export const routes: Routes = [
    {
		path: '',
		loadComponent: () => import('./pages/home/home.page').then(m => m.HomePage)
	},
	{
		path: 'blog',
		children: BLOG_ROUTES
	},
	{
		path: '**',
		redirectTo: '',
	}
];

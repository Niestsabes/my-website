import { Routes } from '@angular/router';

export const BLOG_ROUTES: Routes = [
    {
		path: '',
		loadComponent: () => import('./pages/main/blog.page').then(m => m.BlogPage)
	},
	{
		path: ':id',
		loadComponent: () => import('./pages/article/blog-article.page').then(m => m.BlogArticlePage)
	},
	{
		path: '**',
		redirectTo: '',
	}
];

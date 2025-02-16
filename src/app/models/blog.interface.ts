export interface BlogInterface {
	categories: BlogCategory[];
	articles: BlogArticle[];
}

export interface BlogCategory {
	id: string;
	title: string;
	subtitle: string;
	letter: string;
}

export interface BlogArticle {
	id: string;
	title: string;
	subtitle: string;
	summary: string;
	date: string;
	category: string;
	thumbnail: string;
	thumbnailAlt: string;
	uri: string;
}

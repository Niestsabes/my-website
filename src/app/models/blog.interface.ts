export interface BlogInterface {
	categories: BlogCategory[];
	latestArticles: Article[];
}

export interface BlogCategory {
	title: string;
	subtitle: string;
	letter: string;
}

export interface Article {
	id: number;
	title: string;
	subtitle: string;
	summary: string;
	date: string;
	category: string;
	thumbnail: string;
	thumbnailAlt: string;
	url: string;
}

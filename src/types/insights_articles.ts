export interface ImageThumbnail {
	url: string,
	width: number,
	height: number,
}

export interface Image {
	url: string,
	width: number,
	height: number,
	thumbnails?: ImageThumbnail[],
	alternateText?: string,
}

export interface ComplexImage {
	image: Image,
	details?: string,
	description?: string,
	clickthroughUrl?: string,
}

export interface Markdown {
	markdown: string,
}

export default interface Ce_insightsArticle {
	datePosted?: string,
	primaryPhoto?: ComplexImage,
	slug?: string,
	name: string,
	c_insightsArticleBody?: Markdown,
	c_insightsArticleSummary?: string,
	id: string,
}

export interface Dm_directoryChildren {
	name?: string,
	slug?: string,
	c_addressRegionDisplayName?: string,
	dm_childEntityIds?: string[],
}

export interface RootStream {
	id: string,
	uid: string,
	meta: any,
	name: string,
	slug: string,
	dm_directoryChildren: Dm_directoryChildren[],
}

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

export interface Insightsarticles {
	name: string,
	id: string,
	slug: string,
	datePosted: string,
	c_insightsArticleSummary: string,
	primaryPhoto: ComplexImage,
	c_insightsArticleBody: any,
}

export interface Home {
	id: string,
	name: string,
	primaryPhoto: ComplexImage,
	slug: string,
	c_heroBannerTitle: string,
	c_heroBannerDescription: string,
}

export interface Address {
	line1?: string,
	line2?: string,
	line3?: string,
	sublocality?: string,
	city?: string,
	region?: string,
	postalCode?: string,
	extraDescription?: string,
	countryCode?: string,
}

export interface Coordinate {
	latitude?: number,
	longitude?: number,
}

export interface Fins_relatedServices {
	name?: string,
	description?: string,
	fins_servicesImage?: Image,
}

export interface C_linkedInsightsArticles {
	name?: string,
	slug?: string,
	c_insightsArticleSummary?: string,
	primaryPhoto?: ComplexImage,
}

export interface Professionals {
	name: string,
	id: string,
	description: string,
	headshot: Image,
	slug: string,
	photoGallery: ComplexImage[],
	c_fPBio: string,
	fins_jobTitle: string,
	logo: ComplexImage,
	emails: string[],
	address: Address,
	mainPhone: any,
	geocodedCoordinate: Coordinate,
	fins_relatedServices: Fins_relatedServices[],
	c_linkedInsightsArticles: C_linkedInsightsArticles[],
}

export interface C_featuredServices {
	name?: string,
	c_serviceDescription?: string,
	slug?: string,
}

export interface C_featuredArticles {
	name?: string,
	datePosted?: string,
	primaryPhoto?: ComplexImage,
	c_insightsArticleSummary?: string,
	c_insightsArticleBody?: any,
	slug?: string,
}

export interface Time {
	start?: any,
	end?: any,
}

export interface C_featuredEvents {
	name?: string,
	description?: string,
	time?: Time,
}

export interface C_navbar {
	name?: string,
	slug?: string,
	relatedServices?: any,
}

export interface SiteStream {
	name: string,
	c_headerLogo: Image,
	c_featuredServices: C_featuredServices[],
	c_featuredArticles: C_featuredArticles[],
	c_featuredEvents: C_featuredEvents[],
	c_navbar: C_navbar[],
}

export interface Dm_directoryParents {
	name?: string,
	slug?: string,
	meta?: string,
	c_addressRegionDisplayName?: string,
}

export interface Dm_directoryChildren_1 {
	name?: string,
	address?: Address,
	mainPhone?: any,
	slug?: string,
}

export interface CityStream {
	id: string,
	uid: string,
	meta: any,
	name: string,
	description: string,
	slug: string,
	c_addressRegionDisplayName: string,
	dm_directoryParents: Dm_directoryParents[],
	dm_directoryChildren: Dm_directoryChildren_1[],
}

export interface Fins_relatedServices_1 {
	name?: string,
	c_serviceDescription?: string,
	slug?: string,
}

export interface C_relatedFPsAndTeams {
	name?: string,
	mainPhone?: any,
	emails?: string[],
	headshot?: Image,
	fins_jobTitle?: string,
	slug?: string,
}

export interface Locations {
	name: string,
	id: string,
	description: string,
	slug: string,
	photoGallery: ComplexImage[],
	logo: ComplexImage,
	emails: string[],
	address: Address,
	mainPhone: any,
	geocodedCoordinate: Coordinate,
	fins_relatedServices: Fins_relatedServices_1[],
	c_relatedFPsAndTeams: C_relatedFPsAndTeams[],
	c_linkedInsightsArticles: C_linkedInsightsArticles[],
}

export interface C_childProducts {
	name?: string,
}

export interface C_parentService {
	name?: string,
	slug?: string,
}

export interface Products {
	name: string,
	id: string,
	slug: string,
	fins_servicesImage: Image,
	c_serviceDescription: string,
	c_serviceLongDescription: string,
	c_childProducts: C_childProducts[],
	c_parentService: C_parentService[],
}

export interface C_childProducts_1 {
	name?: string,
	slug?: string,
}

export interface Services {
	name: string,
	id: string,
	slug: string,
	fins_servicesImage: Image,
	c_serviceDescription: string,
	c_serviceLongDescription: string,
	c_childProducts: C_childProducts_1[],
}

export interface Dm_directoryParents_1 {
	name?: string,
	slug?: string,
	meta?: string,
}

export interface Dm_directoryChildren_2 {
	name?: string,
	slug?: string,
	dm_childEntityIds?: string[],
}

export interface StateStream {
	id: string,
	uid: string,
	meta: any,
	name: string,
	description: string,
	slug: string,
	c_addressRegionDisplayName: string,
	dm_childEntityIds: string[],
	dm_directoryParents: Dm_directoryParents_1[],
	dm_directoryChildren: Dm_directoryChildren_2[],
}

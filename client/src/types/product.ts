type TProduct = {
	id: string;
	attributes: {
		title: string;
		image: IImage;
		price: number;
		quantity?: number;
	};
};

interface IImage {
	data: IData;
}

interface IData {
	id: number;
	attributes: IAttributes;
}

interface IAttributes {
	name: string;
	alternativeText: any;
	caption: any;
	width: number;
	height: number;
	formats: IFormats;
	hash: string;
	ext: string;
	mime: string;
	size: number;
	url: string;
	previewUrl: any;
	provider: string;
	provider_metadata: any;
	createdAt: string;
	updatedAt: string;
}

interface IFormats {
	thumbnail: IThumbnail;
	medium: IMedium;
	small: ISmall;
}

interface IThumbnail {
	name: string;
	hash: string;
	ext: string;
	mime: string;
	path: any;
	width: number;
	height: number;
	size: number;
	url: string;
}

interface IMedium {
	name: string;
	hash: string;
	ext: string;
	mime: string;
	path: any;
	width: number;
	height: number;
	size: number;
	url: string;
}

interface ISmall {
	name: string;
	hash: string;
	ext: string;
	mime: string;
	path: any;
	width: number;
	height: number;
	size: number;
	url: string;
}

export type { TProduct, IFormats };

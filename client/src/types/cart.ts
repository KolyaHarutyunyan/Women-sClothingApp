import { TUser } from "./auth";
import type { IFormats } from "./product";

type TCart = {
	products: TCartProduct[];
};

type TCartResponse = TCart & TUser;

type TCartProduct = {
	id: number;
	title: string;
	image: { formats: IFormats };
	price: number;
	quantity?: number;
};

export type { TCart, TCartResponse, TCartProduct };

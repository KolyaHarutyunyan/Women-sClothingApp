import { TCart } from "./cart";

type TAuth = {
	email: string;
	password: string;
	identifier?: string;
	username?: string;
};

type TUserResponse = {
	jwt: string;
	user: TUser;
};

type TUser = {
	id: number;
	username: string;
	email: string;
	cart: TCart;
	provider: string;
	confirmed: boolean;
	blocked: boolean;
	createdAt: string;
	updatedAt: string;
};

export type { TAuth, TUserResponse, TUser };

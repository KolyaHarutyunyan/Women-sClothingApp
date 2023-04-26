import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { TCart, TCartResponse } from "../../types/cart";

const baseQuery = fetchBaseQuery({
	baseUrl: process.env.REACT_APP_API_BASE_URL,
	prepareHeaders: headers => {
		headers.set("Authorization", `Bearer ${process.env.REACT_APP_API_TOKEN}`);
		return headers;
	},
});

export const cartApi = createApi({
	reducerPath: "cartApi",
	baseQuery,
	endpoints: builder => ({
		getCart: builder.query<TCartResponse, string>({
			query: userId => ({
				url: `/users/${userId}`,
				params: { populate: "cart.products.image" },
			}),
		}),

		updateCart: builder.mutation<void, { userId: string; cart: TCart }>({
			query: ({ userId, cart }) => ({
				url: `/users/${userId}`,
				method: "PUT",
				body: { cart },
			}),
		}),
	}),
});

export const { useLazyGetCartQuery, useUpdateCartMutation } = cartApi;

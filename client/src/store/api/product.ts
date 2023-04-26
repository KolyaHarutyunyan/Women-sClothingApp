import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { TProduct } from "../../types/product";

const baseQuery = fetchBaseQuery({
	baseUrl: process.env.REACT_APP_API_BASE_URL,
	prepareHeaders: headers => {
		headers.set("Authorization", `Bearer ${process.env.REACT_APP_API_TOKEN}`);
		return headers;
	},
});

export const productApi = createApi({
	reducerPath: "productApi",
	baseQuery,
	endpoints: builder => ({
		getProducts: builder.query<TProduct[], void>({
			query: () => ({
				url: "/products",
				params: { populate: "image" },
			}),
			transformResponse: ({ data }) => data,
		}),

		getProductById: builder.query<TProduct, string>({
			query: productId => ({
				url: `/products/${productId}`,
				params: { populate: "image" },
			}),
			transformResponse: ({ data }) => data,
		}),
	}),
});

export const { useGetProductsQuery, useLazyGetProductByIdQuery } = productApi;

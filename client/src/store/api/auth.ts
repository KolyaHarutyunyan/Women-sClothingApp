import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { TAuth, TUserResponse } from "../../types/auth";

export const authApi = createApi({
	reducerPath: "authApi",
	baseQuery: fetchBaseQuery({
		baseUrl: process.env.REACT_APP_API_BASE_URL,
	}),
	endpoints: builder => ({
		register: builder.mutation<TUserResponse, TAuth>({
			query: authData => ({
				url: "/auth/local/register",
				method: "POST",
				body: { ...authData },
			}),
		}),

		login: builder.mutation<TUserResponse, TAuth>({
			query: authData => ({
				url: "/auth/local",
				method: "POST",
				body: { ...authData },
			}),
		}),
	}),
});

export const { useRegisterMutation, useLoginMutation } = authApi;

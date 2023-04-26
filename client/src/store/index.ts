import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./slice/product";
import { authSlice } from "./slice/auth";
import { cartSlice } from "./slice/cart";
import { productApi } from "./api/product";
import { authApi } from "./api/auth";
import { cartApi } from "./api/cart";

export const store = configureStore({
	reducer: {
		product: productSlice.reducer,
		auth: authSlice.reducer,
		cart: cartSlice.reducer,
		[productApi.reducerPath]: productApi.reducer,
		[authApi.reducerPath]: authApi.reducer,
		[cartApi.reducerPath]: cartApi.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(
			productApi.middleware,
			authApi.middleware,
			cartApi.middleware
		),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

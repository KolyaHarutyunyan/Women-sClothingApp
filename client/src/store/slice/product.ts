import { createSlice } from "@reduxjs/toolkit";
import type { TProduct } from "../../types/product";

interface IProductSlice {
	products: TProduct[];
	product: TProduct | null;
}

const initialState: IProductSlice = {
	products: [],
	product: null,
};

export const productSlice = createSlice({
	name: "product",
	initialState,
	reducers: {
		setProducts: (state, action) => {
			state.products = action.payload;
		},

		setProduct: (state, action) => {
			state.product = action.payload;
		},
	},
});

export const { setProducts, setProduct } = productSlice.actions;

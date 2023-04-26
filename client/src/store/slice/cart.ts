import { createSlice } from "@reduxjs/toolkit";
import { TCartProduct } from "../../types/cart";

interface ICartSlice {
	cartProducts: TCartProduct[];
}

const initialState: ICartSlice = {
	cartProducts: [],
};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		setCartProducts: (state, action) => {
			state.cartProducts = action.payload;
		},

		addToCart: (state, action) => {
			const product = state.cartProducts.find(
				item => item.id === action.payload.id
			);
			if (!product) {
				state.cartProducts.push(action.payload);
			}
		},

		removeFromCart: (state, action) => {
			state.cartProducts = state.cartProducts.filter(
				item => item.id !== action.payload
			);
		},
	},
});

export const { setCartProducts, addToCart, removeFromCart } = cartSlice.actions;

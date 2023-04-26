import { createSlice } from "@reduxjs/toolkit";
import type { TUser } from "../../types/auth";

interface IAuthSlice {
	user: TUser | null;
}

const initialState: IAuthSlice = {
	user: null,
};

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.user = action.payload;
		},
	},
});

export const { setUser } = authSlice.actions;

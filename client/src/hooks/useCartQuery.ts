import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLazyGetCartQuery } from "../store/api/cart";
import { setCartProducts } from "../store/slice/cart";
import type { AppDispatch } from "../store";
import { useUserData } from "./useAuth";

export const useCartQuery = () => {
	const user = useUserData();

	const dispatch: AppDispatch = useDispatch();

	const [getCart, getCartResult] = useLazyGetCartQuery();

	useEffect(() => {
		if (user?.id) handleGetCart();
	}, [user?.id]);

	const handleGetCart = useCallback(async () => {
		const userWithCart = await getCart(user?.id).unwrap();
		dispatch(setCartProducts(userWithCart?.cart?.products ?? []));
	}, [user?.id]);

	return { getCart, getCartResult };
};

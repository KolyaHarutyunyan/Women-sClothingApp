import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, CircularProgress, Typography } from "@mui/material";
import { AppDispatch, RootState } from "../../store";
import { useUpdateCartMutation } from "../../store/api/cart";
import { removeFromCart as removeFromCartState } from "../../store/slice/cart";
import { useUserData } from "../../hooks/useAuth";
import CartProductsList from "./CartProductsList";
import Button from "../../components/button/Button";
import type { TCartProduct } from "../../types/cart";
import { useCartQuery } from "../../hooks/useCartQuery";

const Cart = () => {
	const user = useUserData();

	const { cartProducts } = useSelector((state: RootState) => state.cart);

	const dispatch: AppDispatch = useDispatch();

	const { getCart, getCartResult } = useCartQuery();

	const [removeFromCart] = useUpdateCartMutation();

	const removeFromCartHandler = useCallback(async (product: TCartProduct) => {
		try {
			const userWithCart = await getCart(user.id).unwrap();
			const { cart } = userWithCart || { cart: { products: [] } };

			const filteredCart = {
				products: cart.products.filter(item => item.id !== product.id),
			};

			dispatch(removeFromCartState(product.id));

			await removeFromCart({
				userId: user.id,
				cart: filteredCart,
			}).unwrap();
		} catch (err) {
			console.log(err);
		}
	}, []);

	return (
		<Box
			component="div"
			mt="80px"
			//   @ts-ignore
			backgroundColor="white"
		>
			<Box
				display="flex"
				flexDirection="column"
				alignItems="center"
				padding="30px"
				overflow="auto"
				height="100%"
			>
				<Box mb="15px" textAlign="center">
					<Typography variant="h3">
						{cartProducts?.length
							? `YOUR CART PRODUCTS (${cartProducts.length})`
							: "YOUR CART IS EMPTY, FILL IT WITH YOUR FAVOURITE PRODUCTS"}
					</Typography>
				</Box>
				{getCartResult?.isLoading ? (
					<CircularProgress size="24px" />
				) : (
					<CartProductsList
						cartProducts={cartProducts}
						onClose={removeFromCartHandler}
					/>
				)}
				<Box m="20px 0">
					<Button text="CHECKOUT" isLoading={false} disabled />
				</Box>
			</Box>
		</Box>
	);
};

export default Cart;

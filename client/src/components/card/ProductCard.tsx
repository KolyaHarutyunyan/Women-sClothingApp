import React, { useCallback, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Box, Typography, BoxProps } from "@mui/material";
import Button from "../button/Button";
import { setProduct } from "../../store/slice/product";
import { addToCart as addToCartState } from "../../store/slice/cart";
import {
	useLazyGetCartQuery,
	useUpdateCartMutation,
} from "../../store/api/cart";
import { useAuth, useUserData } from "../../hooks/useAuth";
import { useModal } from "../../hooks/useModal";
import type { AppDispatch } from "../../store";
import type { TProduct } from "../../types/product";

interface IProductCardProps extends BoxProps {
	product: TProduct;
}

const ProductCard: React.FC<IProductCardProps> = ({ product, ...props }) => {
	const navigate = useNavigate();

	const { isAuthenticated } = useAuth();
	const user = useUserData();

	const [isHovered, setIsHovered] = useState(false);

	const { handleOpen } = useModal();

	const dispatch: AppDispatch = useDispatch();

	const [getCart, getCartResult] = useLazyGetCartQuery();
	const [addToCart, addToCartResult] = useUpdateCartMutation();

	const { price, title, image } = useMemo(
		() => product.attributes,
		[product.attributes]
	);
	const {
		data: {
			attributes: {
				formats: {
					medium: { url },
				},
			},
		},
	} = useMemo(() => image, [image]);

	const handleQuickView = useCallback(() => {
		handleOpen();
		dispatch(setProduct(product));
	}, [handleOpen, setProduct, product]);

	const handleAddToCart = useCallback(async () => {
		if (isAuthenticated) {
			try {
				const userWithCart = await getCart(user.id).unwrap();
				const cart = userWithCart.cart ?? { products: [] };

				const productToAdd = {
					id: +product.id,
					...product.attributes,
					image: product.attributes.image.data.attributes,
				};

				const updatedCart = {
					products: [...cart.products, productToAdd],
				};

				dispatch(addToCartState(productToAdd));

				await addToCart({
					userId: user.id,
					cart: updatedCart,
				}).unwrap();
			} catch (err) {
				console.log(err);
			}
		} else {
			navigate("/login");
		}
	}, [isAuthenticated, addToCartState, product]);

	return (
		<Box {...props}>
			<Box
				position="relative"
				onMouseOver={() => setIsHovered(true)}
				onMouseOut={() => setIsHovered(false)}
			>
				<img
					alt={title}
					width="300px"
					height="400px"
					src={process.env.REACT_APP_API_UPLOAD_URL + url}
					style={{ cursor: "pointer" }}
				/>
				<Box
					display={isHovered ? "block" : "none"}
					position="absolute"
					bottom="10%"
					left="0"
					width="100%"
					padding="0 5%"
				>
					<Box display="flex" justifyContent="space-between">
						<Button
							text="Quick View"
							isLoading={false}
							onClick={handleQuickView}
						/>
						<Button
							text="Add to Cart"
							onClick={handleAddToCart}
							isLoading={addToCartResult?.isLoading || getCartResult?.isLoading}
							disabled={addToCartResult?.isLoading || getCartResult?.isLoading}
						/>
					</Box>
				</Box>
			</Box>
			<Box m="3px auto 0" width="max-content" textAlign="center">
				<Typography>{title}</Typography>
				<Typography fontWeight="bold">${price}</Typography>
			</Box>
		</Box>
	);
};

export default ProductCard;

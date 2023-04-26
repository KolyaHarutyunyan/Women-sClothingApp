import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Typography, Box, CircularProgress } from "@mui/material";
import { AppDispatch, RootState } from "../../../store";
import { setProducts } from "../../../store/slice/product";
import { useGetProductsQuery } from "../../../store/api/product";
import ProductCard from "../../../components/card/ProductCard";
import { useCartQuery } from "../../../hooks/useCartQuery";

const ProductsList = () => {
	const dispatch: AppDispatch = useDispatch();

	const { products } = useSelector((state: RootState) => state.product);

	const getProductsResult = useGetProductsQuery();

	const { getCartResult } = useCartQuery();

	useEffect(() => {
		if (getProductsResult?.data) {
			dispatch(setProducts(getProductsResult?.data));
		}
	}, [getProductsResult?.data]);

	return (
		<Box width="80%" margin="80px auto">
			<Typography variant="h3" textAlign="center">
				Our Featured <b>Products</b>
			</Typography>
			{getProductsResult?.isLoading || getCartResult?.isLoading ? (
				<CircularProgress size="24px" />
			) : (
				<Box
					margin="40px auto 0"
					display="grid"
					gridTemplateColumns="repeat(auto-fill, 300px)"
					justifyContent="space-around"
					rowGap="20px"
					columnGap="1.33%"
				>
					{products.map(product => (
						<ProductCard key={product.id} product={product} />
					))}
				</Box>
			)}
		</Box>
	);
};

export default ProductsList;

import { useCallback, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { RootState } from "../../../store";
import { useLazyGetProductByIdQuery } from "../../../store/api/product";
import { useModal } from "../../../hooks/useModal";
import Modal from "../../../components/modal/Modal";

const ProductInfo = () => {
	const isNonTablet = useMediaQuery("(min-width:1024px)");

	const { open, handleClose } = useModal();

	const { product } = useSelector((state: RootState) => state.product);

	const [getProductById, response] = useLazyGetProductByIdQuery();

	useEffect(() => {
		if (product?.id) {
			getProductByIdHandler(product?.id);
		}
	}, [product]);

	const { title, price, image } =
		useMemo(() => response?.data?.attributes, [response?.data?.attributes]) ??
		{};

	const url = useMemo(
		() => image?.data?.attributes?.formats?.medium?.url,
		[image?.data?.attributes?.formats?.medium?.url]
	);

	const getProductByIdHandler = useCallback(
		async (id: string) => {
			await getProductById(id).unwrap();
		},
		[getProductById]
	);

	return (
		<Modal open={open} handleClose={handleClose}>
			<Box
				display="flex"
				flexDirection={isNonTablet ? "row" : "column"}
				alignItems={isNonTablet ? "stretch" : "center"}
				gap="16px"
			>
				<img
					alt={title}
					width="250px"
					height="350px"
					src={process.env.REACT_APP_API_UPLOAD_URL! + url}
				/>
				<Box
					display="flex"
					flexDirection="column"
					justifyContent="space-around"
					gap="16px"
				>
					<Box>
						<Typography variant="h5" component="h2">
							{title}
						</Typography>
						{price && (
							<Typography variant="h5" component="h2" fontWeight="bold">
								${price}
							</Typography>
						)}
					</Box>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat
					</Typography>
				</Box>
			</Box>
		</Modal>
	);
};

export default ProductInfo;

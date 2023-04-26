import React from "react";
import { Box, Divider, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { shades } from "../../theme";
import type { TCartProduct } from "../../types/cart";

interface ICartProductsListProps {
	cartProducts: TCartProduct[];
	onClose: (product: TCartProduct) => void;
}

const CartProductsList: React.FC<ICartProductsListProps> = ({
	cartProducts = [],
	onClose,
}) => (
	<Box>
		{cartProducts.map(item => (
			<Box key={item?.id}>
				<Box
					display="flex"
					justifyContent="space-between"
					alignItems="center"
					p="15px 0"
				>
					<Box flex="1 1 40%">
						<img
							alt={item?.title}
							width="123px"
							height="164px"
							src={`${process.env.REACT_APP_API_UPLOAD_URL}${item?.image?.formats?.medium?.url}`}
						/>
					</Box>
					<Box flex="1 1 60%">
						<Box
							display="flex"
							justifyContent="space-between"
							alignItems="center"
							mb="5px"
						>
							<Typography fontWeight="bold">{item?.title}</Typography>
							<IconButton onClick={() => onClose(item)}>
								<CloseIcon />
							</IconButton>
						</Box>
						<Typography>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore
						</Typography>
						<Box
							display="flex"
							justifyContent="space-between"
							alignItems="center"
							m="15px 0"
						>
							<Box
								display="flex"
								alignItems="center"
								border={`1.5px solid ${shades.neutral[500]}`}
							/>
							<Typography fontWeight="bold">${item?.price}</Typography>
						</Box>
					</Box>
				</Box>
				<Divider />
			</Box>
		))}
	</Box>
);

export default CartProductsList;

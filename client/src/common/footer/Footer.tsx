import { useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import Logo from "../../components/logo/Logo";

const Footer = () => {
	const isNonMobile = useMediaQuery("(min-width:600px)");

	const {
		// @ts-ignore
		palette: { neutral },
	} = useTheme();

	const navigate = useNavigate();

	return (
		<Box
			component="div"
			marginTop="70px"
			padding="40px 0"
			// @ts-ignore
			backgroundColor={neutral.light}
			flexShrink="0"
		>
			<Box
				width="80%"
				margin="auto"
				display="flex"
				justifyContent="space-between"
				flexWrap="wrap"
				rowGap="30px"
				columnGap="clamp(20px, 30px, 40px)"
			>
				<Box width={`clamp(${isNonMobile ? "20%" : "50%"}, 30%, 40%)`}>
					<Logo onClickLogo={() => navigate("/")} />
					<Box mt="30px">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat
					</Box>
				</Box>

				<Box>
					<Typography variant="h4" fontWeight="bold" mb="20px">
						About Us
					</Typography>
					<Typography mb="10px">Careers</Typography>
					<Typography mb="10px">Our Stores</Typography>
					<Typography mb="10px">Terms & Conditions</Typography>
					<Typography mb="10px">Privacy Policy</Typography>
				</Box>

				<Box>
					<Typography variant="h4" fontWeight="bold" mb="20px">
						Customer Care
					</Typography>
					<Typography mb="10px">Help Center</Typography>
					<Typography mb="10px">Track Your Order</Typography>
					<Typography mb="10px">Corporate & Bulk Purchasing</Typography>
					<Typography mb="10px">Returns & Refunds</Typography>
				</Box>

				<Box width={`clamp(${isNonMobile ? "20%" : "50%"}, 25%, 30%)`}>
					<Typography variant="h4" fontWeight="bold" mb="20px">
						Contact Us
					</Typography>
					<Typography mb="10px">
						50 north Whatever Blvd, Washington, DC 10501
					</Typography>
					<Typography mb="10px" sx={{ wordWrap: "break-word" }}>
						Email: mredwardroh@gmail.com
					</Typography>
					<Typography mb="10px">(222)333-4444</Typography>
				</Box>
			</Box>
		</Box>
	);
};

export default Footer;

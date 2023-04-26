import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import {
	Badge,
	Box,
	IconButton,
	Typography,
	useMediaQuery,
} from "@mui/material";
import {
	SearchOutlined,
	PermIdentity,
	ShoppingCartCheckout,
	Logout,
} from "@mui/icons-material";
import type { RootState } from "../../store";
import Logo from "../../components/logo/Logo";
import { shades } from "../../theme";
import { useAuth } from "../../hooks/useAuth";

const Navbar = () => {
	const isNonMobile = useMediaQuery("(min-width:600px)");

	const navigate = useNavigate();

	const { isAuthenticated, logout: logoutCtx } = useAuth();

	const { cartProducts } = useSelector((state: RootState) => state.cart);

	const handleLogout = () => {
		localStorage.clear();
		navigate("/login");
		logoutCtx();
	};

	return (
		<Box
			component="div"
			display="flex"
			alignItems="center"
			width="100%"
			height="60px"
			// @ts-ignore
			backgroundColor={shades.neutral[100]}
			color="black"
			position="fixed"
			top="0"
			left="0"
			zIndex="2"
		>
			<Box
				width="80%"
				margin="auto"
				display="flex"
				justifyContent="space-between"
				alignItems="center"
			>
				<Logo onClickLogo={() => navigate("/")} />
				<Box
					display="flex"
					justifyContent="space-between"
					columnGap="20px"
					zIndex="2"
				>
					{isAuthenticated ? (
						<>
							{isNonMobile && (
								<>
									<IconButton sx={{ color: "black" }} disabled>
										<SearchOutlined />
									</IconButton>
									<IconButton sx={{ color: "black" }} disabled>
										<PermIdentity />
									</IconButton>
								</>
							)}

							<Badge
								badgeContent={cartProducts.length}
								color="secondary"
								invisible={cartProducts.length === 0}
								sx={{
									"& .MuiBadge-badge": {
										right: 5,
										top: 5,
										padding: "0 4px",
										height: "14px",
										minWidth: "13px",
									},
								}}
							>
								<IconButton
									onClick={() => navigate("/cart")}
									sx={{ color: "black" }}
								>
									<ShoppingCartCheckout />
								</IconButton>
							</Badge>
							<IconButton sx={{ color: "black" }} onClick={handleLogout}>
								<Logout />
							</IconButton>
						</>
					) : (
						<>
							<NavLink to="/login" style={{ textDecoration: "none" }}>
								<Typography color={shades.primary[300]}>Login</Typography>
							</NavLink>
							<NavLink to="/register" style={{ textDecoration: "none" }}>
								<Typography color={shades.primary[300]}>Register</Typography>
							</NavLink>
						</>
					)}
				</Box>
			</Box>
		</Box>
	);
};

export default Navbar;

import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import Login from "../../pages/login/Login";
import Register from "../../pages/register/Register";
import Cart from "../../pages/cart/Cart";
import Home from "../../pages/home/Home";
import { useAuth } from "../../hooks/useAuth";

const ScrollToTop = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return null;
};

const Main = () => {
	const { isAuthenticated } = useAuth();

	return (
		<Box flexGrow="1">
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<Home />} />
				{!isAuthenticated && (
					<>
						<Route path="/login" element={<Login />} />
						<Route path="/register" element={<Register />} />
					</>
				)}
				{isAuthenticated && <Route path="/cart" element={<Cart />} />}
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
		</Box>
	);
};

export default Main;

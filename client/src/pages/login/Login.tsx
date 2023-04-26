import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Box, useMediaQuery } from "@mui/material";
import { useLoginMutation } from "../../store/api/auth";
import type { AppDispatch } from "../../store";
import { setUser } from "../../store/slice/auth";
import { useAuth } from "../../hooks/useAuth";
import AuthForm from "../../components/form/AuthForm";
import type { TAuth } from "../../types/auth";

const Login = () => {
	const isNonMobile = useMediaQuery("(min-width:600px)");

	const navigate = useNavigate();

	const { login: loginCtx } = useAuth();

	const dispatch: AppDispatch = useDispatch();

	const [login, result] = useLoginMutation();

	useEffect(() => {
		if (result?.data) {
			dispatch(setUser(result?.data));
			localStorage.setItem("jwt", result?.data?.jwt);
			localStorage.setItem("user", JSON.stringify(result?.data?.user));
			loginCtx();
		}
	}, [result?.data]);

	useEffect(() => {
		if (result?.isSuccess) navigate("/");
	}, [result?.isSuccess]);

	const loginHandler = useCallback(
		async (authFormData: TAuth) => {
			await login(authFormData).unwrap();
		},
		[login]
	);

	return (
		<Box m="80px auto 0" maxWidth={isNonMobile ? "50vw" : "90vw"} width="100%">
			<AuthForm
				authFormFor="login"
				onSubmit={loginHandler}
				isLoading={result.isLoading}
				// @ts-ignore
				error={result?.error?.data?.error?.details?.errors?.[0]}
				// @ts-ignore
				errorMessage={result?.error?.data?.error?.message}
			/>
		</Box>
	);
};

export default Login;

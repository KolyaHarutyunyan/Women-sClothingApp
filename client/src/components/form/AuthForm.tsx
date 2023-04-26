import React, { useCallback, useState } from "react";
import { TextField, Typography } from "@mui/material";
import type { TAuth } from "../../types/auth";
import Button from "../button/Button";
import { TError, checkError } from "../../helpers";
import { shades } from "../../theme";

interface AuthFormProps {
	authFormFor: "login" | "register";
	onSubmit: (authFormData: TAuth) => void;
	isLoading: boolean;
	error: TError;
	errorMessage: string;
}

const AuthForm: React.FC<AuthFormProps> = ({
	onSubmit,
	authFormFor,
	isLoading,
	error,
	errorMessage,
}) => {
	const authname = authFormFor === "register" ? "username" : "identifier";

	const [authFormData, setAuthFormData] = useState<TAuth>({
		[authname]: "",
		email: "",
		password: "",
	});

	const handleChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			setAuthFormData(prevState => ({
				...prevState,
				[event.target.name]: event.target.value,
			}));
		},
		[]
	);

	const handleSubmit = useCallback(
		(event: React.FormEvent<HTMLFormElement>) => {
			event.preventDefault();
			onSubmit(authFormData);
		},
		[onSubmit, authFormData]
	);

	return (
		<form onSubmit={handleSubmit}>
			<TextField
				label="Username"
				variant="outlined"
				fullWidth
				required
				margin="normal"
				name={authname}
				value={authFormData[authname]}
				onChange={handleChange}
				autoComplete="off"
				error={checkError(error, authname) || (!error && !!errorMessage)}
				helperText={checkError(error, authname) && error?.message}
			/>
			{authFormFor === "register" && (
				<TextField
					label="Email"
					variant="outlined"
					fullWidth
					required
					margin="normal"
					name="email"
					value={authFormData.email}
					onChange={handleChange}
					autoComplete="off"
					error={checkError(error, "email") || (!error && !!errorMessage)}
					helperText={checkError(error, "email") && error?.message}
				/>
			)}
			<TextField
				label="Password"
				type="password"
				variant="outlined"
				fullWidth
				required
				margin="normal"
				name="password"
				value={authFormData.password}
				onChange={handleChange}
				autoComplete="off"
				error={checkError(error, "password") || (!error && !!errorMessage)}
				helperText={checkError(error, "password") && error?.message}
			/>
			<Button
				text={authFormFor === "login" ? "Login" : "Register"}
				isLoading={isLoading}
				fullWidth
				type="submit"
			/>
			<Typography textAlign="center" mt="8px" color={shades.secondary[300]}>
				{!error && errorMessage}
			</Typography>
		</form>
	);
};

export default AuthForm;

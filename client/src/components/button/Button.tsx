import React from "react";
import {
	ButtonProps,
	CircularProgress,
	Button as MUIButton,
} from "@mui/material";
import { shades } from "../../theme";

interface IButtonProps extends ButtonProps {
	text: string;
	isLoading: boolean;
}

const Button: React.FC<IButtonProps> = ({
	text,
	isLoading = false,
	...props
}) => (
	<MUIButton
		sx={{
			backgroundColor: shades.primary[300],
			color: "white",
			border: "1px solid transparent",
			"&:hover": {
				backgroundColor: "white",
				color: shades.primary[300],
				borderColor: shades.primary[100],
			},
			"&:disabled": { color: shades.neutral[500] },
		}}
		{...props}
	>
		{isLoading ? <CircularProgress size="20px" /> : text}
	</MUIButton>
);

export default Button;

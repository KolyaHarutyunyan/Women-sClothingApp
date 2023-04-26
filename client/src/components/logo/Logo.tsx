import React from "react";
import { Box, BoxProps } from "@mui/material";
import { shades } from "../../theme";

interface ILogoProps extends BoxProps {
	onClickLogo: () => void;
}

const Logo: React.FC<ILogoProps> = ({ onClickLogo, ...props }) => (
	<Box
		onClick={onClickLogo}
		sx={{ "&:hover": { cursor: "pointer" } }}
		color={shades.secondary[500]}
		{...props}
	>
		WOMEN&apos;S CLOTHING
	</Box>
);

export default Logo;

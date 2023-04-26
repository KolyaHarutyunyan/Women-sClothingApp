import React from "react";
import { Button, Modal as MUIModal, Box, ModalProps } from "@mui/material";

interface IModalProps extends ModalProps {
	open: boolean;
	handleClose: () => void;
}

const Modal: React.FC<IModalProps> = ({
	open,
	handleClose,
	children,
	...props
}) => (
	<MUIModal open={open} onClose={handleClose} {...props}>
		<Box
			sx={{
				position: "absolute",
				top: "50%",
				left: "50%",
				transform: "translate(-50%, -50%)",
				bgcolor: "background.paper",
				boxShadow: 24,
				p: 4,
				borderRadius: 1,
			}}
		>
			<Button
				sx={{ position: "absolute", top: "8px", right: "8px" }}
				onClick={handleClose}
			>
				Close
			</Button>
			{children}
		</Box>
	</MUIModal>
);

export default Modal;

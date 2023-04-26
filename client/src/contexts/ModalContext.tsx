import React, { ReactNode, useMemo, useState } from "react";

interface IModalContext {
	open: boolean;
	handleOpen: () => void;
	handleClose: () => void;
}

interface IModalContextProviderProps {
	children: ReactNode;
}

export const ModalContext = React.createContext({
	open: false,
	handleOpen: () => {},
	handleClose: () => {},
});

const ModalContextProvider: React.FC<IModalContextProviderProps> = ({
	children,
}) => {
	const [open, setOpen] = useState(false);

	const handleOpen = () => setOpen(true);

	const handleClose = () => setOpen(false);

	const context: IModalContext = useMemo(
		() => ({
			open,
			handleOpen,
			handleClose,
		}),
		[open, handleOpen, handleClose]
	);

	return (
		<ModalContext.Provider value={context}>{children}</ModalContext.Provider>
	);
};

export default ModalContextProvider;

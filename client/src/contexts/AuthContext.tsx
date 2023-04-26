import React, { ReactNode, createContext, useMemo, useState } from "react";

interface IAuthContext {
	isAuthenticated: boolean;
	login: () => void;
	logout: () => void;
}

interface IAuthContextProviderProps {
	children: ReactNode;
}

export const AuthContext = createContext({
	isAuthenticated: false,
	login: () => {},
	logout: () => {},
});

const AuthContextProvider: React.FC<IAuthContextProviderProps> = ({
	children,
}) => {
	const [isAuthenticated, setIsAuthenticated] = useState(
		!!localStorage.getItem("jwt")
	);

	const login = () => setIsAuthenticated(true);
	const logout = () => setIsAuthenticated(false);

	const context: IAuthContext = useMemo(
		() => ({
			isAuthenticated,
			login,
			logout,
		}),
		[isAuthenticated, login, logout]
	);

	return (
		<AuthContext.Provider value={context}>{children}</AuthContext.Provider>
	);
};

export default AuthContextProvider;

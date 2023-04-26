import { useContext, useMemo } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const useAuth = () => useContext(AuthContext);

export const useUserData = () =>
	useMemo(() => JSON.parse(localStorage.getItem("user")!) ?? null, []);

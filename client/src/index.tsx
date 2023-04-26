import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import { theme } from "./theme";
import { store } from "./store";
import App from "./App";
import ModalContextProvider from "./contexts/ModalContext";
import AuthContextProvider from "./contexts/AuthContext";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<AuthContextProvider>
				<ModalContextProvider>
					<ThemeProvider theme={theme}>
						<CssBaseline />
						<App />
					</ThemeProvider>
				</ModalContextProvider>
			</AuthContextProvider>
		</Provider>
	</React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

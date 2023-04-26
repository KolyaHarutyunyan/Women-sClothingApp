import { BrowserRouter } from "react-router-dom";
import Navbar from "./common/navbar/Navbar";
import Footer from "./common/footer/Footer";
import Main from "./common/main/Main";

function App() {
	return (
		<div className="app">
			<BrowserRouter>
				<Navbar />
				<Main />
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;

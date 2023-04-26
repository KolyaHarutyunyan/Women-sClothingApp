import { Box } from "@mui/material";
import MainCarousel from "./fragments/MainCarousel";
import ProductsList from "./fragments/ProductsList";
import ProductInfo from "./fragments/ProductInfo";

const Home = () => (
	<Box>
		<MainCarousel />
		<ProductsList />
		<ProductInfo />
	</Box>
);

export default Home;

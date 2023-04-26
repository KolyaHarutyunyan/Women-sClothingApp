import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Box, Typography, IconButton, useMediaQuery } from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { shades } from "../../../theme";
import texture1 from "../../../assets/brooke-cagle-aVT8VkmzML4-unsplash.jpeg";
import texture2 from "../../../assets/chris-ghinda-wK2ESlRRZQ8-unsplash.jpeg";
import texture3 from "../../../assets/jc-gellidon-JM8TkWJ9UIY-unsplash.jpeg";
import texture4 from "../../../assets/larm-rmah-R1Ku62Z7zqE-unsplash.jpeg";
import texture5 from "../../../assets/toa-heftiba-dti56waifB4-unsplash.jpeg";

const textures = [texture1, texture2, texture3, texture4, texture5];

const MainCarousel = () => {
	const isNonMobile = useMediaQuery("(min-width:600px)");

	return (
		<Carousel
			autoPlay={isNonMobile}
			infiniteLoop
			showThumbs={false}
			showIndicators
			showStatus={false}
			swipeable
			renderArrowPrev={onClickHandler =>
				isNonMobile && (
					<IconButton
						onClick={onClickHandler}
						sx={{
							position: "absolute",
							top: "50%",
							left: "0",
							color: "white",
							padding: "5px",
							zIndex: "10",
						}}
					>
						<NavigateBeforeIcon sx={{ fontSize: 40 }} />
					</IconButton>
				)
			}
			renderArrowNext={onClickHandler =>
				isNonMobile && (
					<IconButton
						onClick={onClickHandler}
						sx={{
							position: "absolute",
							top: "50%",
							right: "0",
							color: "white",
							padding: "5px",
							zIndex: "10",
						}}
					>
						<NavigateNextIcon sx={{ fontSize: 40 }} />
					</IconButton>
				)
			}
		>
			{textures.map((texture, index) => (
				<Box key={`carousel-image-${index + 1}`}>
					<img
						src={texture}
						alt={`carousel-${index + 1}`}
						style={{
							width: "100%",
							height: "700px",
							objectFit: "cover",
							backgroundAttachment: "fixed",
						}}
					/>
					<Box
						component="div"
						color="white"
						padding="20px"
						borderRadius="1px"
						textAlign="left"
						// @ts-ignore
						backgroundColor="rgb(0, 0, 0, 0.4)"
						position="absolute"
						top="46%"
						left={isNonMobile ? "10%" : "0"}
						right={isNonMobile ? undefined : "0"}
						margin={isNonMobile ? undefined : "0 auto"}
						maxWidth={isNonMobile ? undefined : "240px"}
					>
						<Typography color={shades.secondary[200]}>-- NEW ITEMS</Typography>
						<Typography variant="h1">Summer Sale</Typography>
						<Typography
							fontWeight="bold"
							sx={{ textDecoration: "underline", opacity: 0.6 }}
						>
							Discover More
						</Typography>
					</Box>
				</Box>
			))}
		</Carousel>
	);
};

export default MainCarousel;

import React, { useRef } from "react";
import {
	StyleSheet,
	View,
	Text,
	Dimensions,
	Image,
	ImageBackground,
	Animated,
} from "react-native";
import colors from "../assets/constants/colors";
import fonts from "../assets/constants/fonts";

const LandingPage = () => {
	const landingPagesArray = [
		{
			backgroundImg: require("../assets/images/landingPage.png"),
			imagePath: require("../assets/images/landingPageIcon.png"),
			mainTitle: "pet animals",
			para: "",
			key: "1",
		},
		{
			backgroundImg: "",
			imagePath: require("../assets/images/landingPageOne.png"),
			mainTitle: "Bring new BFF home",
			para:
				"Bring home your favorite pets. Buy them at the most affordable prices, from the place you like",
			key: "2",
		},
		{
			backgroundImg: "",
			imagePath: require("../assets/images/landingPageTwo.png"),
			mainTitle: "Consult Vets from your place",
			para:
				"Talk to Vets through live sessions, chat or call them from your place. Anything for pets made online.",
			key: "3",
		},
		{
			backgroundImg: "",
			imagePath: require("../assets/images/landingPageThree.png"),
			mainTitle: "Deliver Pets",
			para: "Pets delivered online anywhere and anytime by our delivery agents",
			key: "4",
		},
	];

	const scrollX = useRef(new Animated.Value(0)).current;
	const { width, height } = Dimensions.get("screen");

	const SCREEN_WIDTH = width;
	const SCREEN_HEIGHT = height;

	const handleSkipEvent = () => {
		// This will be implemented later
	};

	const handleNextEvent = () => {
		// This will be implemented later
	};

	return (
		<View style={styles.container}>
			<View style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT }}>
				<Animated.FlatList
					horizontal
					pagingEnabled
					showsHorizontalScrollIndicator={false}
					bounces={false}
					onScroll={Animated.event(
						[{ nativeEvent: { contentOffset: { x: scrollX } } }],
						{ useNativeDriver: false }
					)}
					scrollEventThrottle={1}
					data={landingPagesArray}
					renderItem={({ item }) => {
						return (
							<View key={item.key} style={{ width, height }}>
								{item.backgroundImg !== "" && (
									<View style={styles.imageFilter}>
										<ImageBackground source={item.backgroundImg} style={styles.image} />
										<View style={styles.imageOverlay} />
										<View style={styles.mainText}>
											<Image source={item.imagePath} style={styles.icon} />
											<Text style={styles.title}>{item.mainTitle}</Text>
										</View>
									</View>
								)}
								{item.para !== "" && (
									<View style={styles.imageContainer}>
										<Image source={item.imagePath} style={styles.imageStyle} />
										<View style={styles.contentContainer}>
											<Text style={styles.mainTitle}>{item.mainTitle}</Text>
											<Text style={styles.para}>{item.para}</Text>
										</View>
									</View>
								)}
							</View>
						);
					}}
				/>
			</View>

			<View style={styles.bottomContent}>
				<Text style={styles.btnText}>Skip</Text>

				<View style={styles.pagination}>
					<Animated.View
						style={{
							width: 20,
							height: 10,
							backgroundColor: colors.pink,
							borderRadius: 10,
							marginHorizontal: 10,
							left: 15,
							zIndex: 1,
							transform: [
								{
									translateX: Animated.divide(scrollX, SCREEN_WIDTH).interpolate({
										inputRange: [0, 4],
										outputRange: [0, SCREEN_WIDTH / 4],
									}),
								},
							],
						}}
					/>
					{landingPagesArray.map((item) => {
						return <View style={styles.dots} key={item.key} />;
					})}
				</View>

				<Text style={styles.btnText}>Next</Text>
			</View>
		</View>
	);
};

export default LandingPage;

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: "100%",
		justifyContent: "center",
		alignItems: "center",
	},
	imageFilter: {
		width: "100%",
		height: "100%",
	},
	image: {
		position: "absolute",
		width: "100%",
		height: "100%",
		overlayColor: colors.primary,
		resizeMode: "cover",
	},
	imageOverlay: {
		position: "absolute",
		top: 0,
		bottom: 0,
		right: 0,
		left: 0,
		backgroundColor: colors.primary,
		opacity: 0.6,
	},
	mainText: {
		justifyContent: "center",
		alignItems: "center",
		height: "100%",
	},
	icon: {
		maxWidth: 210,
		height: 210,
	},
	title: {
		fontSize: fonts.title,
		fontWeight: fonts.fontWeight.bold,
		textTransform: "uppercase",
		color: colors.white,
	},
	imageContainer: {
		width: "100%",
		height: "100%",
		justifyContent: "center",
		alignItems: "center",
	},
	imageStyle: {
		justifyContent: "center",
		alignItems: "center",
		top: "7%",
		left: "8%",
		maxWidth: 412,
		width: "100%",
		maxHeight: 420,
		height: "80%",
		resizeMode: "cover",
		marginBottom: 80,
	},
	contentContainer: {
		marginLeft: 36,
		marginRight: 36,
	},
	mainTitle: {
		color: colors.darkGrey,
		fontSize: fonts.mediumText,
		fontWeight: fonts.fontWeight.bold,
		lineHeight: 24,
		marginBottom: 5,
	},
	para: {
		color: colors.darkGrey,
		fontSize: fonts.smallText,
		marginBottom: 80,
	},
	bottomContent: {
		position: "absolute",
		flexDirection: "row",
		bottom: 50,
		width: "100%",
		justifyContent: "space-between",
		alignItems: "center",
		paddingLeft: 20,
		paddingRight: 20,
	},
	pagination: {
		flexDirection: "row",
	},
	dots: {
		width: 10,
		height: 10,
		backgroundColor: colors.lightGrey,
		borderRadius: 10,
		marginHorizontal: 8,
		right: 20,
	},
	buttonContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		width: "100%",
	},
	btnText: {
		fontFamily: fonts.fontFamily.openSansSemiBold,
		fontWeight: fonts.fontWeight.bold,
		color: colors.pink,
		fontSize: fonts.mediumText,
	},
});

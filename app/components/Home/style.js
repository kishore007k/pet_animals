import { StyleSheet, Dimensions } from "react-native";
import colors from "../../assets/constants/colors";
import fonts from "../../assets/constants/fonts";

const { width } = Dimensions.get("screen");

export default styles = StyleSheet.create({
	mainContainer: {
		width: "100%",
		height: "100%",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: colors.white,
	},
	topImageBg: {
		position: "absolute",
		width: "100%",
		height: "45%",
		top: 0,
	},
	gradient: {
		justifyContent: "center",
		alignItems: "center",
		width: "150%",
		height: "75%",
		marginLeft: -90,
		borderBottomLeftRadius: 600,
		borderBottomRightRadius: 600,
	},
	homePet: {
		position: "absolute",
		top: 45,
	},
	mainWrapper: {
		width,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		top: -70,
	},
	locationAndIcon: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	locationIcon: {
		marginRight: 10,
	},
	location: {
		color: colors.greyText,
		fontSize: fonts.smallText,
	},
	locationAndArrow: {
		flexDirection: "row",
		alignItems: "center",
	},
	locationDropBox: {
		fontSize: fonts.mediumText,
		fontWeight: fonts.fontWeight.bold,
		marginRight: 10,
	},
	downArrow: {
		top: 2,
	},
	chatAndNot: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	chatIcon: {
		left: 30,
	},
	inputContainer: {
		backgroundColor: colors.white,
		width: "90%",
		marginLeft: "auto",
		marginRight: "auto",
		bottom: 20,
		borderRadius: 10,
		shadowColor: colors.black,
		shadowOffset: {
			width: 0,
			height: 10,
		},
		shadowOpacity: 0.5,
		shadowRadius: 60,
		marginBottom: 40,
	},
	input: {
		flexDirection: "row-reverse",
		justifyContent: "flex-end",
		alignItems: "center",
	},
	textInput: {
		width: "90%",
		fontSize: fonts.h2,
		paddingVertical: 10,
		marginLeft: 10,
	},
	searchIcon: {
		width: 18,
		height: 18,
		resizeMode: "contain",
		marginLeft: 10,
	},
	cardContainer: {
		width: 350,
		height: 242,
		resizeMode: "contain",
		marginRight: "auto",
		marginLeft: "auto",
		borderRadius: 10,
	},
	flatListImage: {
		width: 350,
		height: 242,
		marginLeft: "auto",
		marginRight: "auto",
		borderRadius: 10,
	},
	cardTitle: {
		fontSize: fonts.h2,
		fontWeight: fonts.fontWeight.bold,
		marginBottom: 15,
		paddingLeft: 10,
	},
	cardContents: {
		position: "absolute",
		bottom: 10,
		width: "100%",
		alignItems: "center",
	},
	cardContentsBgColor: {
		position: "relative",
		top: 110,
		width: "100%",
		height: 115,
		backfaceVisibility: "visible",
		backgroundColor: colors.black,
		opacity: 0.5,
		borderBottomRightRadius: 10,
		borderBottomLeftRadius: 10,
	},
	cardContentsTitle: {
		fontSize: fonts.mediumText,
		fontWeight: fonts.fontWeight.bold,
		alignSelf: "baseline",
		marginLeft: 10,
		marginBottom: 10,
		color: colors.whiteText,
	},
	cardBottomContainer: {
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginHorizontal: "auto",
	},
	cardContentsStarsContainer: {
		alignSelf: "baseline",
		marginLeft: 10,
	},
	cardContentsStars: {
		width: 16,
		height: 16,
		resizeMode: "contain",
		marginBottom: 10,
	},
	cardBottomContainerHeart: {
		width: 25,
		height: 25,
		resizeMode: "contain",
		marginRight: 10,
	},
	pagination: {
		position: "absolute",
		bottom: 10,
		left: 120,
	},
});

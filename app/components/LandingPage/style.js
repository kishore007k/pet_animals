import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
	image: {
		position: "absolute",
		width: "100%",
		height: "100%",
		overlayColor: "#162593",
		resizeMode: "cover",
	},
	imageFilter: {
		width: "100%",
		height: "100%",
	},
	imageOverlay: {
		position: "absolute",
		top: 0,
		bottom: 0,
		right: 0,
		left: 0,
		backgroundColor: "#162593",
		opacity: 0.6,
	},
	mainText: {
		justifyContent: "center",
		alignItems: "center",
		height: "100%",
	},
	title: {
		fontSize: 40,
		fontWeight: "bold",
		textTransform: "uppercase",
		color: "#fff",
	},
	icon: {
		maxWidth: 211.78,
		height: 209.44,
	},
	navigatorContainer: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
		height: 30,
		position: "absolute",
		bottom: 50,
		paddingRight: 20,
		paddingLeft: 20,
	},
	skipBtn: {
		color: "#F95A7E",
		fontSize: 18,
		fontWeight: "bold",
		position: "relative",
		right: 130,
	},
	nextBtn: {
		color: "#F95A7E",
		fontSize: 18,
		fontWeight: "bold",
		left: 130,
	},
	first: {
		width: 20,
		height: 10,
		backgroundColor: "#F95A7E",
		borderRadius: 8,
	},
	dot: {
		width: 10,
		height: 10,
		backgroundColor: "#DEDEDE",
		borderRadius: 10,
	},
	navDots: {
		flexDirection: "row",
		justifyContent: "space-evenly",
		alignItems: "center",
		width: "100%",
	},
});

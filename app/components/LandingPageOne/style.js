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
		maxWidth: 210,
		height: 210,
	},
	navigatorContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		maxWidth: "100%",
		width: "100%",
		height: 30,
		position: "relative",
		top: 174,
		paddingLeft: 20,
		paddingRight: 20,
	},
	skipBtn: {
		color: "#F95A7E",
		fontSize: 18,
		fontWeight: "bold",
	},
	nextBtn: {
		color: "#F95A7E",
		fontSize: 18,
		fontWeight: "bold",
	},
	first: {
		width: 25,
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
	dotsNav: {
		flexDirection: "row",
		width: "50%",
		justifyContent: "space-evenly",
		alignItems: "center",
	}
});

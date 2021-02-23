import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
	imageContainer: {
        width: "100%",
        height: "100%",
    },
    image: {
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
        color: "#515151",
        fontSize: 18,
        fontWeight: "bold",
        lineHeight: 24,
        marginBottom: 5,
    },
    para: {
        color: "#515151",
        fontSize: 14,
        marginBottom: 96,
    },
    navigatorContainer: {
        width: "100%",
        height: 40,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
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
	activeDot: {
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

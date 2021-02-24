import { StyleSheet } from "react-native";
import colors from "../../assets/constants/colors";
import fonts from "../../assets/constants/fonts";

// First
export const stylesOne = StyleSheet.create({
	image: {
		position: "absolute",
		width: "100%",
		height: "100%",
		overlayColor: colors.primary,
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
		backgroundColor: colors.primary,
		opacity: 0.6,
	},
	mainText: {
		justifyContent: "center",
		alignItems: "center",
		height: "100%",
	},
	title: {
		fontSize: fonts.title,
		fontWeight: fonts.fontWeight.bold,
		textTransform: "uppercase",
		color: colors.white,
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
		color: colors.pink,
		fontSize: fonts.mediumText,
		fontWeight: fonts.fontWeight.bold,
	},
	nextBtn: {
		color: colors.pink,
		fontSize: fonts.mediumText,
		fontWeight: fonts.fontWeight.bold,
	},
	first: {
		width: 25,
		height: 10,
		backgroundColor: colors.pink,
		borderRadius: 8,
	},
	dot: {
		width: 10,
		height: 10,
		backgroundColor: colors.border,
		borderRadius: 10,
	},
	dotsNav: {
		flexDirection: "row",
		width: "50%",
		justifyContent: "space-evenly",
		alignItems: "center",
	}
});

// Second
export const stylesTwo = StyleSheet.create({
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
        color: colors.darkGrey,
        fontSize: fonts.mediumText,
        fontWeight: fonts.fontWeight.bold,
        lineHeight: 24,
        marginBottom: 5,
    },
    para: {
        color: colors.darkGrey,
        fontSize: fonts.smallText,
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
		color: colors.pink,
		fontSize: fonts.mediumText,
		fontWeight: fonts.fontWeight.bold,
	},
	nextBtn: {
		color: colors.pink,
		fontSize: fonts.mediumText,
		fontWeight: fonts.fontWeight.bold,
	},
	activeDot: {
		width: 25,
		height: 10,
		backgroundColor: colors.pink,
		borderRadius: 8,
	},
	dot: {
		width: 10,
		height: 10,
		backgroundColor: colors.border,
		borderRadius: 10,
	},
	dotsNav: {
		flexDirection: "row",
		width: "50%",
		justifyContent: "space-evenly",
		alignItems: "center",
	}
});

// Third
export const stylesThree = StyleSheet.create({
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
        color: colors.darkGrey,
        fontSize: fonts.mediumText,
        fontWeight: fonts.fontWeight.bold,
        lineHeight: 24,
        marginBottom: 5,
    },
    para: {
        color: colors.darkGrey,
        fontSize: fonts.smallText,
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
		color: colors.pink,
		fontSize: fonts.mediumText,
		fontWeight: fonts.fontWeight.bold,
	},
	nextBtn: {
		color: colors.pink,
		fontSize: fonts.mediumText,
		fontWeight: fonts.fontWeight.bold,
	},
	activeDot: {
		width: 25,
		height: 10,
		backgroundColor: colors.pink,
		borderRadius: 8,
	},
	dot: {
		width: 10,
		height: 10,
		backgroundColor: colors.border,
		borderRadius: 10,
	},
	dotsNav: {
		flexDirection: "row",
		width: "50%",
		justifyContent: "space-evenly",
		alignItems: "center",
	}
});

// Fourth
export const stylesFour = StyleSheet.create({
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
        color: colors.darkGrey,
        fontSize: fonts.mediumText,
        fontWeight: fonts.fontWeight.bold,
        lineHeight: 24,
        marginBottom: 5,
    },
    para: {
        color: colors.darkGrey,
        fontSize: fonts.smallText,
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
		color: colors.pink,
		fontSize: fonts.mediumText,
		fontWeight: fonts.fontWeight.bold,
	},
	nextBtn: {
		color: colors.pink,
		fontSize: fonts.mediumText,
		fontWeight: fonts.fontWeight.bold,
	},
	activeDot: {
		width: 25,
		height: 10,
		backgroundColor: colors.pink,
		borderRadius: 8,
	},
	dot: {
		width: 10,
		height: 10,
		backgroundColor: colors.border,
		borderRadius: 10,
	},
	dotsNav: {
		flexDirection: "row",
		width: "50%",
		justifyContent: "space-evenly",
		alignItems: "center",
	}
});

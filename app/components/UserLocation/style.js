import { StyleSheet } from "react-native";
import colors from "../../assets/constants/colors";
import fonts from "../../assets/constants/fonts";

export default styles = StyleSheet.create({
	container: {
		width: "100%",
		height: "100%",
		padding: 20,
	},
	mainTitle: {
		fontSize: fonts.h2,
		fontWeight: fonts.fontWeight.semiBold,
		marginBottom: 40,
		marginTop: 40,
	},
	inputContainer: {
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
		borderColor: colors.primary,
		borderWidth: 1,
		borderRadius: 5,
		width: "100%",
		height: 50,
		marginBottom: 80,
	},
	locationInput: {
		fontSize: fonts.mediumText,
		width: "100%",
		height: 50,
		zIndex: 3,
	},
	searchIcon: {
		width: 18,
		height: 18,
		marginRight: 10,
		marginLeft: 10,
	},
	recentTitle: {
		fontSize: fonts.h2,
		fontWeight: fonts.fontWeight.semiBold,
	},
	recentContainer: {
		marginBottom: 70,
	},
	dash: {
		borderBottomColor: colors.border,
		borderBottomWidth: 1,
		marginTop: 10,
		marginBottom: 10,
	},
	location: {
		fontSize: fonts.mediumText,
		fontWeight: fonts.fontWeight.small,
	},
});

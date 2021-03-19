import { StyleSheet } from "react-native";
import colors from "../../assets/constants/colors";
import fonts from "../../assets/constants/fonts";

export default styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: colors.white,
	},
	cover: {
		width: "100%",
		height: "100%",
		backgroundColor: colors.grey,
		borderTopLeftRadius: 50,
		borderTopRightRadius: 50,
		marginTop: 40,
	},
	mainTitle: {
		fontSize: fonts.h1,
		fontFamily: fonts.fontFamily.openSansBold,
		fontWeight: fonts.fontWeight.semiBold,
		marginLeft: 20,
		marginTop: 20,
	},
	inputContainer: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: colors.white,
		width: "80%",
		marginRight: "auto",
		marginLeft: "auto",
		paddingVertical: 10,
		paddingHorizontal: 5,
		borderRadius: 5,
		marginVertical: 20,
	},
	searchIcon: {
		width: 18,
		height: 18,
		resizeMode: "contain",
		marginLeft: 10,
	},
	input: {
		fontSize: fonts.h2,
		fontFamily: fonts.fontFamily.openSansRegular,
		fontWeight: fonts.fontWeight.regular,
		width: "90%",
		marginLeft: 10,
	},
	cardInactiveContainer: {
		flexDirection: "row",
		alignItems: "center",
		paddingVertical: 10,
		marginVertical: 10,
		backgroundColor: colors.grey,
	},
	cardActiveContainer: {
		flexDirection: "row",
		alignItems: "center",
		paddingVertical: 10,
		marginVertical: 10,
		backgroundColor: colors.white,
	},
	profilePic: {
		width: 75,
		height: 75,
		resizeMode: "cover",
		borderRadius: 100,
		marginHorizontal: 10,
		marginRight: 20,
	},
	profileContent: {
		width: "60%",
	},
	profileTitle: {
		fontSize: fonts.mediumText,
		fontFamily: fonts.fontFamily.openSansSemiBold,
		fontWeight: fonts.fontWeight.semiBold,
	},
	profilePara: {
		fontSize: fonts.smallText,
		fontFamily: fonts.fontFamily.openSansRegular,
		fontWeight: fonts.fontWeight.small,
		color: colors.greyText,
	},
	profileTime: {
		marginRight: 10,
	},
});

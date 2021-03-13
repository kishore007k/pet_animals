import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import colors from "../../assets/constants/colors";
import fonts from "../../assets/constants/fonts";

const SearchPage = () => (
	<View style={styles.container}>
		<View style={styles.inputContainer}>
			<TextInput
				placeholder="Search"
				autoFocus
				style={{ paddingStart: 20, fontSize: fonts.h2 }}
			/>
			<Image
				source={require("../../assets/Icons/searchIcon.png")}
				style={styles.searchIcon}
			/>
		</View>
	</View>
);
export default SearchPage;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	inputContainer: {
		width: "90%",
		backgroundColor: colors.white,
		flexDirection: "row-reverse",
		paddingVertical: 10,
		justifyContent: "flex-end",
		alignItems: "center",
		marginBottom: "auto",
		top: "10%",
	},
	searchIcon: {
		width: 20,
		height: 20,
		marginStart: 20,
	},
});

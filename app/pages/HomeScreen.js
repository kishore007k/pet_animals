import React from "react";
import {
	View,
	Text,
	StyleSheet,
	Image,
	StatusBar,
	ImageBackground,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import colors from "../assets/constants/colors";
import fonts from "../assets/constants/fonts";

const Home = () => (
	<View style={styles.container}>
		<StatusBar />
		<ImageBackground
			source={require("../assets/Icons/petAnimal.png")}
			style={styles.topImageBg}
		/>
		<View style={styles.mainWrapper}>
			<View style={styles.subWrapper}>
				<View style={styles.locationAndIcon}>
					<View>
						<Image
							source={require("../assets/Icons/location.png")}
							style={styles.locationIcon}
						/>
					</View>
					<View>
						<Text style={styles.location}>Location</Text>
						<View style={styles.locationAndArrow}>
							<Text style={styles.locationDropBox}>Chennai</Text>
							<Image
								source={require("../assets/Icons/arrowDown.png")}
								style={styles.downArrow}
							/>
						</View>
					</View>
				</View>
			</View>
			<View style={styles.chatAndNot}>
				<Image
					source={require("../assets/Icons/chatIcon.png")}
					style={styles.chatIcon}
				/>
				<Image source={require("../assets/Icons/notificationIcon.png")} />
			</View>
		</View>
		<View style={styles.input}>
			<TextInput
				style={styles.textInput}
				placeholder="Search"
				placeholderTextColor={colors.greyText}
			/>
			<Image
				source={require("../assets/Icons/searchIcon.png")}
				style={styles.searchIcon}
			/>
		</View>
	</View>
);
export default Home;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: colors.white,
	},
	mainWrapper: {
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		position: "absolute",
		top: 0,
	},
	subWrapper: {
		flexDirection: "row",
		alignItems: "center",
	},
	topImageBg: {
		top: 35,
		width: "100%",
		height: "100%",
	},
	locationAndIcon: {
		flexDirection: "row",
		alignItems: "center",
		marginTop: 20,
	},
	locationIcon: {
		marginHorizontal: 10,
	},
	location: {
		fontSize: fonts.smallText,
		color: colors.greyText,
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
		top: 10,
	},
	chatIcon: {
		left: 30,
	},
	input: {
		position: "relative",
		top: -60,
		width: "90%",
		backgroundColor: colors.white,
		paddingVertical: 10,
		zIndex: 1,
		shadowOpacity: 1,
		shadowRadius: 10,
	},
	textInput: {
		paddingStart: 40,
		fontSize: fonts.h2,
	},
	searchIcon: {
		position: "relative",
		width: 20,
		height: 20,
		top: -25,
		left: 10,
	},
});

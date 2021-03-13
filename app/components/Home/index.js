import React from "react";
import {
	View,
	Text,
	StyleSheet,
	Image,
	StatusBar,
	TextInput,
	ImageBackground,
	Dimensions,
} from "react-native";
import colors from "../../assets/constants/colors";
import fonts from "../../assets/constants/fonts";
const { width, height } = Dimensions.get("screen");

const HomePage = ({ navigation }) => (
	<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
		<StatusBar
			animated={true}
			backgroundColor={colors.white}
			barStyle={"dark-content"}
			hidden={false}
		/>
		<View style={styles.container}>
			<View style={styles.topImageBg}>
				<ImageBackground
					source={require("../../assets/Icons/petAnimal.png")}
					style={{ width, height }}
				/>
			</View>
			<View style={styles.mainWrapper}>
				<View style={styles.subWrapper}>
					<View style={styles.locationAndIcon}>
						<View>
							<Image
								source={require("../../assets/Icons/location.png")}
								style={styles.locationIcon}
							/>
						</View>
						<View>
							<Text style={styles.location}>Location</Text>
							<View style={styles.locationAndArrow}>
								<Text style={styles.locationDropBox}>Chennai</Text>
								<Image
									source={require("../../assets/Icons/arrowDown.png")}
									style={styles.downArrow}
								/>
							</View>
						</View>
					</View>
				</View>
				<View style={styles.chatAndNot}>
					<Image
						source={require("../../assets/Icons/chatIcon.png")}
						style={styles.chatIcon}
					/>
					<Image source={require("../../assets/Icons/notificationIcon.png")} />
				</View>
			</View>
			<View style={styles.input}>
				<TextInput
					style={styles.textInput}
					placeholder="Search"
					placeholderTextColor={colors.greyText}
					onFocus={() => navigation.navigate("SearchPage")}
				/>
				<Image
					source={require("../../assets/Icons/searchIcon.png")}
					style={styles.searchIcon}
				/>
			</View>
		</View>
	</View>
);
export default HomePage;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: colors.white,
	},
	topImageBg: {
		flex: 1,
		width,
		height,
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
		position: "absolute",
		top: "25%",
		width: "90%",
		backgroundColor: colors.white,
		paddingVertical: 10,
		zIndex: 1,
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

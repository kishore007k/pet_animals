import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

// All fonts and colors
import colors from "../assets/constants/colors";
import fonts from "../assets/constants/fonts";

const LoadingScreen = () => {
	return (
		<View style={styles.container}>
			<LinearGradient
				// Background Linear Gradient
				colors={colors.blueGradient}
				style={styles.background}
				start={[0.9, 0.2]}
				end={[-0.2, 1]}
			/>
			<View style={styles.imageAndTextContainer}>
				<ImageBackground
					source={require("../assets/images/dogPaw.png")}
					style={styles.bgImage}
				/>
				<Text style={styles.bottomText}>PET ANIMALS</Text>
			</View>
		</View>
	);
};

export default LoadingScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	background: {
		position: "absolute",
		opacity: 0.68,
		width: "100%",
		height: "100%",
	},
	imageAndTextContainer: {
		width: "100%",
		height: "100%",
		justifyContent: "center",
		alignItems: "center",
	},
	bgImage: {
		width: 285,
		height: 300,
		marginTop: "auto",
	},
	bottomText: {
		fontSize: fonts.h1,
		color: colors.whiteText,
		marginTop: "auto",
		marginBottom: 50,
	},
});

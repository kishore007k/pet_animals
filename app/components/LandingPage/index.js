import React from "react";
import styles from "./style";
import { Text, View, ImageBackground, Image } from "react-native";

const LandingPage = () => {
	return (
		<View style={styles.imageFilter}>
			<ImageBackground
				source={require("../../assets/images/landingPage.png")}
				style={styles.image}
			/>
			<View style={styles.imageOverlay} />
			<View style={styles.mainText}>
				<Image
					source={require("../../assets/images/landingPageIcon.png")}
					style={styles.icon}
				/>
				<Text style={styles.title}>pet animals</Text>
				<View style={styles.navigatorContainer}>
					<Text style={styles.skipBtn}>Skip</Text>
					<Text style={styles.navBots}>
						<View style={styles.first} />
						<View style={styles.dot} />
						<View style={styles.dot} />
					</Text>
					<Text style={styles.nextBtn}>Next</Text>
				</View>
			</View>
		</View>
	);
};

export default LandingPage;

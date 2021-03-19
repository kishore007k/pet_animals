import React, { useState } from "react";
import { View, Text, TextInput, Image } from "react-native";

// Custom Button import
import CustomButton from "../CustomButton";

// Style
import styles from "./style";

const UserLocation = () => {
	const [userLocation, setUserLocation] = useState("");

	const handleContinue = () => {
		// This will handle the continue
	};

	return (
		<View style={styles.container}>
			<View>
				<Text style={styles.mainTitle}>User Location</Text>
				<View style={styles.inputContainer}>
					<Image
						source={require("../../assets/Icons/searchIcon.png")}
						style={styles.searchIcon}
					/>
					<TextInput
						placeholder="Location"
						onChange={(text) => setUserLocation(text)}
						value={userLocation}
						style={styles.locationInput}
						inlineImageLeft="search"
						inlineImagePadding={5}
						underlineColorAndroid="transparent"
					/>
				</View>
			</View>

			{/* This should be created dynamically */}
			<View style={styles.recentContainer}>
				<Text style={styles.recentTitle}>Recent</Text>
				<View style={styles.dash} />
				<View>
					<Text style={styles.location}>Chennai, India</Text>
					<View style={styles.dash} />
				</View>
				<View>
					<Text style={styles.location}>Bangalore, India</Text>
					<View style={styles.dash} />
				</View>
			</View>
			<CustomButton buttonText="Continue" onPressHandler={handleContinue} />
		</View>
	);
};

export default UserLocation;

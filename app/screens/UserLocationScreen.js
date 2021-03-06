import React from "react";
import { View, StyleSheet } from "react-native";

// Components Imports
import UserLocation from "../components/UserLocation";

export default UserLocationScreen = () => {
	return (
		<View style={styles.container}>
			<UserLocation />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: "100%",
		justifyContent: "center",
		alignItems: "center",
	},
});

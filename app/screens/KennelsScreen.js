import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Kennels = () => (
	<View style={styles.container}>
		<Text>Kennels Screen</Text>
	</View>
);
export default Kennels;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});

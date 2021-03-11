import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Consult = () => (
	<View style={styles.container}>
		<Text>Consult Screen</Text>
	</View>
);
export default Consult;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});

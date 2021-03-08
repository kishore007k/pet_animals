import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MyCart = (props) => (
	<View style={styles.container}>
		<Text>MyCart</Text>
	</View>
);
export default MyCart;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});

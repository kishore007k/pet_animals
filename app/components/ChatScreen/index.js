import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ChatScreen = (props) => (
	<View style={styles.container}>
		<Text>ChatScreen</Text>
	</View>
);
export default ChatScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});

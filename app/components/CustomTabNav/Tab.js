import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const Tab = ({
	tab,
	icon,
	color,
	onPress,
	activeStyle,
}) => {
	return (
		<TouchableOpacity style={activeStyle} onPress={onPress}>
			<Image source={icon} style={styles.image} />
			<Text style={{ color }}>{tab.name}</Text>
		</TouchableOpacity>
	);
};
export default Tab;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	image: {
		width: 30,
		height: 40,
		resizeMode: "contain",
	},
});

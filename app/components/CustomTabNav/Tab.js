import React from "react";
import { Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../../assets/constants/colors";

const Tab = ({ tab, icon, onPress, activeTabStyle, opacity, selected }) => {
	return (
		<TouchableOpacity style={activeTabStyle} onPress={onPress}>
			{selected ? (
				<LinearGradient
					colors={colors.pinkGradient}
					style={{ paddingHorizontal: 10, paddingVertical: 5, borderRadius: 100 }}
				>
					<Image source={icon} style={styles.image} />
				</LinearGradient>
			) : (
				<>
					<Image source={icon} style={styles.image} />
					<Text style={opacity}>{tab.name}</Text>
				</>
			)}
		</TouchableOpacity>
	);
};
export default Tab;

const styles = StyleSheet.create({
	image: {
		width: 30,
		height: 40,
		resizeMode: "contain",
	},
});

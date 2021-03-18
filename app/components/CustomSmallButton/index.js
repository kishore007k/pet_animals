import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const CustomSmallButton = ({
	buttonText,
	onPressHandler,
	backgroundColor,
	color,
	fontWeight,
	fontSize,
}) => {
	return (
		<TouchableOpacity onPress={onPressHandler}>
			<View
				style={{
					backgroundColor,
					paddingHorizontal: 5,
					borderRadius: 10,
				}}
			>
				<Text
					style={{
						paddingTop: 5,
						paddingBottom: 5,
						fontSize,
						fontWeight,
						color,
					}}
				>
					{buttonText}
				</Text>
			</View>
		</TouchableOpacity>
	);
};

export default CustomSmallButton;

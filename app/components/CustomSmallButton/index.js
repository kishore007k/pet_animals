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
					paddingVertical: 5,
					borderRadius: 5,
				}}
			>
				<Text
					style={{
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

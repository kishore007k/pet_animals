import React from "react";
import { View, Text, TextInput, Image } from "react-native";
import CustomButton from "../components/CustomButton";
import styles from "../components/LoginAndSignUpPage/style";

const SignUpScreen = ({ navigation }) => {
	return (
		<View style={{ width: "100%", height: "100%" }}>
			<Text>SignUp Screen</Text>
			<CustomButton
				buttonText="Sign In"
				onPressHandler={() => navigation.navigate("LoginScreen")}
			/>
		</View>
	);
};
export default SignUpScreen;

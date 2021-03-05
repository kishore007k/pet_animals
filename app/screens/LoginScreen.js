import React from "react";
import { View, Text, TextInput, Image } from "react-native";
import CustomButton from "../components/CustomButton";
import styles from "../components/LoginAndSignUpPage/style";

const LoginScreen = ({ navigation }) => {
	return (
		<View style={{ width: "100%", height: "100%" }}>
			<Text>SignUp Screen</Text>
			<CustomButton
				buttonText="Sign Up"
				onPressHandler={() => navigation.navigate("SignUpScreen")}
			/>
		</View>
	);
};
export default LoginScreen;

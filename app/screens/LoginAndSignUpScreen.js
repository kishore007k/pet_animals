import React from "react";
import { View } from "react-native";
import { LoginPage, SignUpPage } from "../components/LoginAndSignUpPage";

const LoginAndSignUpScreen = () => {
	return (
		<View>
			<LoginPage />
			{/* <SignUpPage /> */}
		</View>
	);
};

export default LoginAndSignUpScreen;

import React from "react";
import { LoginPage, SignUpPage } from "../components/LoginAndSignUpPage";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const AuthenticationScreen = () => {
	return (
		<Stack.Navigator headerMode="none" initialRouteName="Login">
			<Stack.Screen name="Login" component={LoginPage} />
			<Stack.Screen name="SignUp" component={SignUpPage} />
		</Stack.Navigator>
	);
};

export default AuthenticationScreen;

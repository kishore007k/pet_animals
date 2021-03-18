import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";

const Stack = createStackNavigator();

const Authentication = () => {
	return (
		<Stack.Navigator initialRouteName="LoginPage" headerMode="none">
			<Stack.Screen name="LoginPage" component={LoginPage} />
			<Stack.Screen name="SignUpPage" component={SignUpPage} />
		</Stack.Navigator>
	);
};

export default Authentication;

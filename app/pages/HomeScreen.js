import React from "react";
import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "../components/Home";
import SearchPage from "../components/Search";

const Stack = createStackNavigator();

const Home = () => (
	<Stack.Navigator headerMode="none" initialRouteName="HomePage">
		<Stack.Screen name="HomePage" component={HomePage} />
		<Stack.Screen name="SearchPage" component={SearchPage} />
	</Stack.Navigator>
);
export default Home;

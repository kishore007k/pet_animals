import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "../components/Home";
import SearchPage from "../components/Search";
import UserLocation from "../components/UserLocation";
import ChatsPage from "./ChatsPage";

import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

const Stack = createStackNavigator();

const Home = () => {
	const getTabBarVisibility = (route) => {
		const routeName = getFocusedRouteNameFromRoute(route) ?? "Chat";
		if (routeName === "Chat") {
			return false;
		}
		return true;
	};
	return (
		<Stack.Navigator headerMode="none" initialRouteName="HomePage">
			<Stack.Screen name="HomePage" component={HomePage} />
			<Stack.Screen name="SearchPage" component={SearchPage} />
			<Stack.Screen name="Location" component={UserLocation} />
			<Stack.Screen
				name="Chat"
				component={ChatsPage}
				options={({ route }) => ({
					tabBarVisible: getTabBarVisibility(route),
				})}
			/>
		</Stack.Navigator>
	);
};
export default Home;

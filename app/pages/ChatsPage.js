import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Messages from "../components/Messages";
import ChatScreen from "../components/ChatScreen";

const Stack = createStackNavigator();

const ChatsPage = () => {
	return (
		<Stack.Navigator initialRouteName="Messages">
			<Stack.Screen name="Messages" component={Messages} />
			<Stack.Screen
				name="ChatScreen"
				component={ChatScreen}
				options={({ route }) => ({
					title: route.params.userName,
					headerBackTitleVisible: false,
				})}
			/>
		</Stack.Navigator>
	);
};
export default ChatsPage;

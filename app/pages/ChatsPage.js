import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ChatPage from "../components/ChatsPage";
import IndividualChatPage from "../components/IndividualChatPage";

const Stack = createStackNavigator();

const ChatsPage = () => (
	<Stack.Navigator initialRouteName="ChatsHome">
		<Stack.Screen name="ChatsHome" component={ChatPage} />
		<Stack.Screen name="IndividualChat" component={IndividualChatPage} />
	</Stack.Navigator>
);
export default ChatsPage;

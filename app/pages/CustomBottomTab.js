import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./HomeScreen";
import Kennels from "./KennelsScreen";
import Consult from "./ConsultScreen";
import MyCart from "./MyCartScreen";
import Profile from "./ProfileScreen";
import CustomTabNav from "../components/CustomTabNav";

const Tab = createBottomTabNavigator();

const CustomBottomTab = () => {
	return (
		<Tab.Navigator
			initialRouteName="Home"
			tabBar={(props) => <CustomTabNav {...props} />}
		>
			<Tab.Screen
				name="Kennels"
				component={Kennels}
				initialParams={{
					activeIcon: require("../assets/Icons/KennelsActive.png"),
					inActiveIcon: require("../assets/Icons/KennelsInActive.png"),
				}}
			/>
			<Tab.Screen
				name="Consult"
				component={Consult}
				initialParams={{
					activeIcon: require("../assets/Icons/ConsultActive.png"),
					inActiveIcon: require("../assets/Icons/ConsultInActive.png"),
				}}
			/>
			<Tab.Screen
				name="Home"
				component={Home}
				initialParams={{
					activeIcon: require("../assets/Icons/HomeActive.png"),
					inActiveIcon: require("../assets/Icons/HomeInActive.png"),
				}}
			/>
			<Tab.Screen
				name="Cart"
				component={MyCart}
				initialParams={{
					activeIcon: require("../assets/Icons/CartActive.png"),
					inActiveIcon: require("../assets/Icons/CartInActive.png"),
				}}
			/>
			<Tab.Screen
				name="Profile"
				component={Profile}
				initialParams={{
					activeIcon: require("../assets/Icons/ProfileActive.png"),
					inActiveIcon: require("../assets/Icons/ProfileInActive.png"),
				}}
			/>
		</Tab.Navigator>
	);
};
export default CustomBottomTab;

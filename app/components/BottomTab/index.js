import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Image, View, StyleSheet } from "react-native";

// These are the screens to be implement
import Home from "../../screens/HomeScreen";
import Live from "../../screens/ConsultScreen";
import MyCart from "../../screens/MyCartScreen";
import NewsFeed from "../../screens/KennelsScreen";
import Profile from "../../screens/ProfileScreen";
import colors from "../../assets/constants/colors";

const Tab = createMaterialBottomTabNavigator();

const BottomTab = () => {
	return (
		<Tab.Navigator
			initialRouteName="Home"
			labeled={false}
			activeColor={colors.pink}
			barStyle={{
				height: 100,
				justifyContent: "space-evenly",
				backgroundColor: colors.white,
			}}
		>
			<Tab.Screen
				name="Kennels"
				component={NewsFeed}
				options={{
					tabBarIcon: ({ focused }) =>
						focused ? (
							<View style={styles.imageContainer}>
								<Image
									source={require("../../assets/Icons/kennelsActive.png")}
									style={styles.imageActive}
								/>
							</View>
						) : (
							<Image
								source={require("../../assets/Icons/kennelsInActive.png")}
								style={styles.image}
							/>
						),
				}}
			/>
			<Tab.Screen
				name="Consult"
				component={Live}
				options={{
					tabBarIcon: ({ focused }) =>
						focused ? (
							<View style={styles.imageContainer}>
								<Image
									source={require("../../assets/Icons/consultActive.png")}
									style={styles.imageActive}
								/>
							</View>
						) : (
							<Image
								source={require("../../assets/Icons/consultInActive.png")}
								style={styles.image}
							/>
						),
				}}
			/>
			<Tab.Screen
				name="Home"
				component={Home}
				options={{
					tabBarIcon: ({ focused }) =>
						focused ? (
							<View style={styles.imageContainer}>
								<Image
									source={require("../../assets/Icons/homeActive.png")}
									style={styles.imageActive}
								/>
							</View>
						) : (
							<Image
								source={require("../../assets/Icons/homeInActive.png")}
								style={styles.image}
							/>
						),
				}}
			/>
			<Tab.Screen
				name="MyCart"
				component={MyCart}
				options={{
					tabBarIcon: ({ focused }) =>
						focused ? (
							<View style={styles.imageContainer}>
								<Image
									source={require("../../assets/Icons/cartActive.png")}
									style={styles.imageActive}
								/>
							</View>
						) : (
							<Image
								source={require("../../assets/Icons/cartInActive.png")}
								style={styles.image}
							/>
						),
				}}
			/>
			<Tab.Screen
				name="Profile"
				component={Profile}
				options={{
					tabBarIcon: ({ focused }) =>
						focused ? (
							<View style={styles.imageContainer}>
								<Image
									source={require("../../assets/Icons/profileActive.png")}
									style={styles.imageActive}
								/>
							</View>
						) : (
							<Image
								source={require("../../assets/Icons/profileInActive.png")}
								style={styles.image}
							/>
						),
				}}
			/>
		</Tab.Navigator>
	);
};

export default BottomTab;

const styles = StyleSheet.create({
	imageContainer: {
		backgroundColor: colors.pink,
		paddingHorizontal: 10,
		paddingVertical: 10,
		borderRadius: 100,
		justifyContent: "center",
		alignItems: "center",
	},
	imageActive: {
		maxWidth: 35,
		maxHeight: 40,
		resizeMode: "contain",
	},
	image: {
		maxWidth: 25,
		maxHeight: 30,
		resizeMode: "contain",
	},
});

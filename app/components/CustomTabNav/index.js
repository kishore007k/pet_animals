import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import colors from "../../assets/constants/colors";
import Tab from "./Tab";

const { width } = Dimensions.get("screen");

const CustomTabNav = ({ state, navigation }) => {
	const [selected, setSelected] = useState("Home");
	const { routes } = state;
	const activeColor = (currentTab) =>
		currentTab === selected ? colors.greyText : colors.pink;
	const activeTab = (currentTab) =>
		currentTab === selected ? styles.activeTab : styles.inActiveTab;

	return (
		<View style={styles.navContainer}>
			{routes.map((route, index) => {
				const activeIcon = route.params.activeIcon;
				const inActiveIcon = route.params.inActiveIcon;

				const selectedTab = (currentTab) => {
					if (currentTab === selected) {
						return activeIcon;
					} else {
						return inActiveIcon;
					}
				};

				const handleTabNavigation = (activeTabName, index) => {
					if (state.index !== index) {
						setSelected(activeTabName);
						navigation.navigate(activeTabName);
					}
				};

				return (
					<Tab
						tab={route}
						icon={selectedTab(route.name)}
						onPress={() => handleTabNavigation(route.name, index)}
						color={activeColor(route.name)}
						activeStyle={activeTab(route.name)}
						key={route.key}
					/>
				);
			})}
		</View>
	);
};
export default CustomTabNav;

const styles = StyleSheet.create({
	navContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-evenly",
		width,
	},
	activeTab: {
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: colors.pink,
	},
	inActiveTab: {
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: colors.grey,
	},
});

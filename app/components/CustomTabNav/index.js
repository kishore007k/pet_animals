import React, { useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import colors from "../../assets/constants/colors";
import Tab from "./Tab";

const { width } = Dimensions.get("screen");

const CustomTabNav = ({ state, navigation }) => {
	const [selected, setSelected] = useState("Home");
	const { routes } = state;

	const active = (currentTab) => (currentTab === selected ? true : false);

	const activeOpacity = (currentTab) =>
		currentTab === selected ? styles.activeDisplay : styles.inActiveDisplay;
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
						selected={active(route.name)}
						opacity={activeOpacity(route.name)}
						icon={selectedTab(route.name)}
						onPress={() => handleTabNavigation(route.name, index)}
						activeTabStyle={activeTab(route.name)}
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
		paddingVertical: 10,
	},
	activeDisplay: {
		opacity: 0,
	},
	inActiveDisplay: {
		opacity: 1,
		color: colors.pink,
	},
	activeTab: {
		justifyContent: "center",
		alignItems: "center",
		flex: 1,
	},
	inActiveTab: {
		justifyContent: "center",
		alignItems: "center",
		flex: 1,
	},
});

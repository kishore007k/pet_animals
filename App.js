import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AppLoading from "expo-app-loading";

// This is to load Custom Fonts
import * as Font from "expo-font";

// These are all Screens
import OnBoardingUi from "./app/screens/OnBoardingUi";
import CustomBottomTab from "./app/pages/CustomBottomTab";
import ProfileScreen from "./app/screens/ProfileScreen";
import Authentication from "./app/Authentication";

const Stack = createStackNavigator();

const getFonts = () =>
	Font.loadAsync({
		"acumin-regular": require("./app/assets/fonts/Acumin-RPro.otf"),
		"acumin-italic": require("./app/assets/fonts/Acumin-RPro.otf"),
		"acumin-bold": require("./app/assets/fonts/Acumin-BdPro.otf"),
		"acumin-boldItalic": require("./app/assets/fonts/Acumin-BdItPro.otf"),
		"avenirLt-regular": require("./app/assets/fonts/AvenirLTStd.ttf"),
		"avenirPro-regular": require("./app/assets/fonts/AvenirLTStd-Black.ttf"),
		"avenirPro-opaque": require("./app/assets/fonts/AvenirLTStd-BlackOblique.ttf"),
		"avenirPro-roman": require("./app/assets/fonts/AvenirLTStd-Roman.otf"),
		"avenirNextLtPro-regular": require("./app/assets/fonts/AvenirNextLTPro-Regular.otf"),
		"avenirNextLtPro-bold": require("./app/assets/fonts/AvenirNextLTPro-Bold.otf"),
		"SFProDisplay-regular": require("./app/assets/fonts/SFProDisplay-Regular.ttf"),
		"SFPro-bold": require("./app/assets/fonts/SFProText-Bold.ttf"),
		"SFPro-regular": require("./app/assets/fonts/SFProText-Regular.ttf"),
		"hanuman-regular": require("./app/assets/fonts/Hanuman-Regular.ttf"),
		"hanuman-bold": require("./app/assets/fonts/Hanuman-Bold.ttf"),
		"notoSans-regular": require("./app/assets/fonts/NotoSans-Regular.ttf"),
		"notoSans-bold": require("./app/assets/fonts/NotoSans-Bold.ttf"),
		"notoSans-boldItalic": require("./app/assets/fonts/NotoSans-BoldItalic.ttf"),
		"notoSans-italic": require("./app/assets/fonts/NotoSans-Italic.ttf"),
		"openSans-regular": require("./app/assets/fonts/OpenSans-Regular.ttf"),
		"openSans-bold": require("./app/assets/fonts/OpenSans-Bold.ttf"),
		"openSans-boldItalic": require("./app/assets/fonts/OpenSans-BoldItalic.ttf"),
		"openSans-extraBold": require("./app/assets/fonts/OpenSans-ExtraBold.ttf"),
		"openSans-extraBoldItalic": require("./app/assets/fonts/OpenSans-ExtraBoldItalic.ttf"),
		"openSans-italic": require("./app/assets/fonts/OpenSans-Italic.ttf"),
		"openSans-light": require("./app/assets/fonts/OpenSans-Light.ttf"),
		"openSans-lightItalic": require("./app/assets/fonts/OpenSans-LightItalic.ttf"),
		"openSans-semiBold": require("./app/assets/fonts/OpenSans-SemiBold.ttf"),
		"openSans-semiBoldItalic": require("./app/assets/fonts/OpenSans-SemiBoldItalic.ttf"),
	});

export default function App() {
	const [fontsLoaded, setFontsLoaded] = useState(false);

	if (fontsLoaded) {
		return (
			<NavigationContainer>
				<Stack.Navigator headerMode="none">
					<Stack.Screen name="LandingScreen" component={OnBoardingUi} />
					<Stack.Screen name="LoginPage" component={Authentication} />
					<Stack.Screen name="CustomBottomTab" component={CustomBottomTab} />
				</Stack.Navigator>
			</NavigationContainer>
		);
	} else {
		return (
			<AppLoading
				startAsync={getFonts}
				onFinish={() => setFontsLoaded(true)}
				onError={console.warn}
			/>
		);
	}
}

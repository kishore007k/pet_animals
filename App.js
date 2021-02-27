import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import LandingPage from './app/screens/LandingScreen';
import colors from './app/assets/constants/colors';
import LoginAndSignUpScreen from './app/screens/LoginAndSignUpScreen';
import MobileVerification from './app/screens/MobileVerification';
import UserLocationScreen from './app/screens/UserLocationScreen';

export default function App() {
	return (
		<View style={styles.container}>
			{/* <LandingPage /> */}
			{/* <LoginAndSignUpScreen /> */}
			{/* <MobileVerification /> */}
			<UserLocationScreen />
			<StatusBar style="auto" />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: colors.white,
		alignItems: 'center',
		justifyContent: 'center'
	}
});
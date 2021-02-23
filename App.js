import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import LandingPageOne from './app/components/LandingPageOne';
import LandingPageTwo from './app/components/LandingPageTwo';

export default function App() {
	return (
		<View style={styles.container}>
			{/* <LandingPageOne />  Once the react-native navigation is finished uncomment <LandingPageOne /> and delete the comments */}
			<LandingPageTwo />
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
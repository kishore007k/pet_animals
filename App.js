import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { LandingPageOne, LandingPageTwo, LandingPageThree, LandingPageFour } from './app/components/LandingPageOne';

// The following imports are created as individual files/components and imported as defaults
// import LandingPageOne from './app/components/LandingPageOne';
// import LandingPageTwo from './app/components/LandingPageTwo';
// import LandingPageThree from './app/components/LandingPageThree';
// import LandingPageFour from './app/components/LandingPageFour';

export default function App() {
	return (
		<View style={styles.container}>
			{/* Once the react-native navigation is finished uncomment this and delete the comments */}
			<LandingPageOne />
			{/* <LandingPageTwo /> */}
			{/* <LandingPageThree /> */}
			{/* <LandingPageFour /> */}
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
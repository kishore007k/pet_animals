import React from 'react';
import { StyleSheet, View } from 'react-native';
import { LandingPageFour, LandingPageOne, LandingPageThree, LandingPageTwo } from '../components/LandingPage';

const LandingPage = () => {
    {/* Once the react-native navigation is finished uncomment this and delete the comments */}
    return (
        <View style={styles.container}>
            {/* <LandingPageOne /> */}
            {/* <LandingPageTwo /> */}
            {/* <LandingPageThree /> */}
            <LandingPageFour />
        </View>
    );
};

export default LandingPage;


const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    }
})
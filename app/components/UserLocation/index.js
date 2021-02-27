import React, { useState } from "react";
import { View, Text, TextInput, Image } from "react-native";
import CustomButton from "../CustomButton";

import styles from "./style";

const UserLocation = () => {
    const [userLocation, setUserLocation] = useState("");

    const handleContinue = () => {
        // This will handle the continue
    }

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.mainTitle}>User Location</Text>
                <TextInput placeholder="Location" onChange={(text) => setUserLocation(text)} value={userLocation} style={styles.locationInput} />
                <Image source={require("../../assets/images/search_icon.png")} style={styles.searchIcon} />
            </View>
            <View style={styles.recentContainer}>
                <Text style={styles.recentTitle}>Recent</Text>
                <View style={styles.listItem}>
                    <Text style={styles.location}>Chennai, India</Text>
                    <View style={styles.dash} />
                </View>
                <View style={styles.listItem}>
                    <Text style={styles.location}>Bangalore, India</Text>
                    <View style={styles.dash} />
                </View>
            </View>
            <CustomButton buttonText="Continue" onPressHandler={handleContinue} />
        </View>
    );
};

export default UserLocation;
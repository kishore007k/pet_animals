import React from 'react'
import { View, Image, Text } from "react-native";
import style from '../LandingPageOne/style';
import styles from "./style";

const LandingPageTwo = () => {
    return (
		<View style={styles.imageContainer}>
			<Image
				source={require("../../assets/images/landingPageOne.png")}
				style={styles.image}
			/>
            <View style={styles.contentContainer}>
                <Text style={styles.mainTitle}>Bring new BFF home</Text>
                <Text style={styles.para}>Bring home your favorite pets. Buy them at the most affordable prices, from the place you like</Text>
                <View style={styles.navigatorContainer}>
                    <View>
                        <Text style={styles.skipBtn}>Skip</Text>
                    </View>
                    <View style={styles.dotsNav}>
                        <View style={styles.dot} />
                        <View style={styles.activeDot} />
                        <View style={styles.dot} />
                    </View>
                    <View>
                        <Text style={styles.nextBtn}>Next</Text>
                    </View>
                </View>
            </View>
		</View>
    )
}

export default LandingPageTwo

import React from 'react'
import { View, Image, Text } from "react-native";
import styles from "./style";

const LandingPageThree = () => {
    return (
		<View style={styles.imageContainer}>
			<Image
				source={require("../../assets/images/landingPageTwo.png")}
				style={styles.image}
			/>
            <View style={styles.contentContainer}>
                <Text style={styles.mainTitle}>Consult Vets from your place</Text>
                <Text style={styles.para}>Talk to Vets through live sessions, chat or call them from your place. Anything for pets made online.</Text>
                <View style={styles.navigatorContainer}>
                    <View>
                        <Text style={styles.skipBtn}>Skip</Text>
                    </View>
                    <View style={styles.dotsNav}>
                        <View style={styles.dot} />
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

export default LandingPageThree;

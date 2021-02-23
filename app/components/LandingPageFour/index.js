import React from 'react'
import { View, Image, Text } from "react-native";
import styles from "./style";

const LandingPageFour = () => {
    return (
		<View style={styles.imageContainer}>
			<Image
				source={require("../../assets/images/landingPageThree.png")}
				style={styles.image}
			/>
            <View style={styles.contentContainer}>
                <Text style={styles.mainTitle}>Deliver Pets</Text>
                <Text style={styles.para}>Pets delivered online anywhere and anytime by our delivery agents</Text>
                <View style={styles.navigatorContainer}>
                    <View>
                        <Text style={styles.skipBtn}>Skip</Text>
                    </View>
                    <View style={styles.dotsNav}>
                        <View style={styles.dot} />
                        <View style={styles.dot} />
                        <View style={styles.dot} />
                        <View style={styles.activeDot} />
                    </View>
                    <View>
                        <Text style={styles.nextBtn}>Next</Text>
                    </View>
                </View>
            </View>
		</View>
    )
}

export default LandingPageFour;

import React from "react";
import {stylesOne, stylesTwo, stylesThree, stylesFour} from "./style";
import { Text, View, ImageBackground, Image } from "react-native";

// First Landing Page
export const LandingPageOne = () => {
	return (
		<View style={stylesOne.imageFilter}>
			<ImageBackground
				source={require("../../assets/images/landingPage.png")}
				style={stylesOne.image}
			/>
			<View style={stylesOne.imageOverlay} />
			<View style={stylesOne.mainText}>
				<Image
					source={require("../../assets/images/landingPageIcon.png")}
					style={stylesOne.icon}
				/>
				<Text style={stylesOne.title}>pet animals</Text>
				<View style={stylesOne.navigatorContainer}>
					<View>
						<Text style={stylesOne.skipBtn}>Skip</Text>
					</View>
					<View style={stylesOne.dotsNav}>
						<View style={stylesOne.first} />
						<View style={stylesOne.dot} />
						<View style={stylesOne.dot} />
						<View style={stylesOne.dot} />
					</View>
					<View>
						<Text style={stylesOne.nextBtn}>Next</Text>
					</View>
				</View>
			</View>
		</View>
	);
};


// Second Landing Page
export const LandingPageTwo = () => {
    return (
		<View style={stylesTwo.imageContainer}>
			<Image
				source={require("../../assets/images/landingPageOne.png")}
				style={stylesTwo.image}
			/>
            <View style={stylesTwo.contentContainer}>
                <Text style={stylesTwo.mainTitle}>Bring new BFF home</Text>
                <Text style={stylesTwo.para}>Bring home your favorite pets. Buy them at the most affordable prices, from the place you like</Text>
                <View style={stylesTwo.navigatorContainer}>
                    <View>
                        <Text style={stylesTwo.skipBtn}>Skip</Text>
                    </View>
                    <View style={stylesTwo.dotsNav}>
                        <View style={stylesTwo.dot} />
                        <View style={stylesTwo.activeDot} />
                        <View style={stylesTwo.dot} />
                        <View style={stylesTwo.dot} />
                    </View>
                    <View>
                        <Text style={stylesTwo.nextBtn}>Next</Text>
                    </View>
                </View>
            </View>
		</View>
    );
};


// Third Landing Page
export const LandingPageThree = () => {
    return (
		<View style={stylesThree.imageContainer}>
			<Image
				source={require("../../assets/images/landingPageTwo.png")}
				style={stylesThree.image}
			/>
            <View style={stylesThree.contentContainer}>
                <Text style={stylesThree.mainTitle}>Consult Vets from your place</Text>
                <Text style={stylesThree.para}>Talk to Vets through live sessions, chat or call them from your place. Anything for pets made online.</Text>
                <View style={stylesThree.navigatorContainer}>
                    <View>
                        <Text style={stylesThree.skipBtn}>Skip</Text>
                    </View>
                    <View style={stylesThree.dotsNav}>
                        <View style={stylesThree.dot} />
                        <View style={stylesThree.dot} />
                        <View style={stylesThree.activeDot} />
                        <View style={stylesThree.dot} />
                    </View>
                    <View>
                        <Text style={stylesThree.nextBtn}>Next</Text>
                    </View>
                </View>
            </View>
		</View>
    );
};


// Fourth Landing Page
export const LandingPageFour = () => {
    return (
		<View style={stylesFour.imageContainer}>
			<Image
				source={require("../../assets/images/landingPageThree.png")}
				style={stylesFour.image}
			/>
            <View style={stylesFour.contentContainer}>
                <Text style={stylesFour.mainTitle}>Deliver Pets</Text>
                <Text style={stylesFour.para}>Pets delivered online anywhere and anytime by our delivery agents</Text>
                <View style={stylesFour.navigatorContainer}>
                    <View>
                        <Text style={stylesFour.skipBtn}>Skip</Text>
                    </View>
                    <View style={stylesFour.dotsNav}>
                        <View style={stylesFour.dot} />
                        <View style={stylesFour.dot} />
                        <View style={stylesFour.dot} />
                        <View style={stylesFour.activeDot} />
                    </View>
                    <View>
                        <Text style={stylesFour.nextBtn}>Next</Text>
                    </View>
                </View>
            </View>
		</View>
    );
};
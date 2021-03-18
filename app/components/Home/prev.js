import React, { useRef } from "react";
import {
	View,
	Text,
	Image,
	StatusBar,
	TextInput,
	Dimensions,
	Animated,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import CustomSmallButton from "../CustomSmallButton";

import colors from "../../assets/constants/colors";
import fonts from "../../assets/constants/fonts";

import styles from "./style";
import { TouchableOpacity } from "react-native-gesture-handler";

const { width } = Dimensions.get("screen");

const HomePage = ({ navigation }) => {
	const DATA = [
		{
			image: require("../../assets/images/Image1.png"),
			title: "Beagle1",
			starsCount: 4,
			key: "1",
		},
		{
			image: require("../../assets/images/Image2.png"),
			title: "Beagle2",
			starsCount: 4,
			key: "2",
		},
		{
			image: require("../../assets/images/Image3.png"),
			title: "Beagle3",
			starsCount: 4,
			key: "3",
		},
		{
			image: require("../../assets/images/Image4.png"),
			title: "Beagle4",
			starsCount: 4,
			key: "4",
		},
	];

	const scrollX = useRef(new Animated.Value(0)).current;

	const Indicator = ({ scrollX }) => {
		return (
			<View style={{ flexDirection: "row" }}>
				{DATA.map((_, i) => {
					const inputRange = [
						(i - 2) * width,
						(i - 1) * width,
						i * width,
						(i + 1) * width,
						(i + 2) * width,
					];

					const backgroundColor = scrollX.interpolate({
						inputRange,
						outputRange: [
							colors.lightGreyPattern,
							colors.lightGreyPattern,
							colors.blueDot,
							colors.lightGreyPattern,
							colors.lightGreyPattern,
						],
					});
					return (
						<Animated.View
							key={`indicator-${i}`}
							style={{
								height: 8,
								width: 8,
								borderRadius: 5,
								backgroundColor,
								margin: 8,
							}}
						/>
					);
				})}
			</View>
		);
	};

	return (
		<View style={styles.mainContainer}>
			<StatusBar
				animated={true}
				backgroundColor={colors.white}
				barStyle={"dark-content"}
				hidden={false}
			/>
			<View style={styles.topImageBg}>
				<LinearGradient colors={colors.lightBlueGradient} style={styles.gradient}>
					<Image
						source={require("../../assets/images/homePet.png")}
						style={styles.homePet}
					/>

					<View style={styles.mainWrapper}>
						<View style={styles.subWrapper}>
							<View style={styles.locationAndIcon}>
								<View>
									<Image
										source={require("../../assets/Icons/location.png")}
										style={styles.locationIcon}
									/>
								</View>
								<View style={styles.locationContainer}>
									<Text style={styles.location}>Location</Text>
									<View style={styles.locationAndArrow}>
										<Text style={styles.locationDropBox}>Chennai</Text>
										<Image
											source={require("../../assets/Icons/arrowDown.png")}
											style={styles.downArrow}
										/>
									</View>
								</View>
							</View>
						</View>

						<View style={styles.chatAndNot}>
							<Image
								source={require("../../assets/Icons/chatIcon.png")}
								style={styles.chatIcon}
							/>
							<Image source={require("../../assets/Icons/notificationIcon.png")} />
						</View>
					</View>
				</LinearGradient>

				<View style={styles.inputContainer}>
					<View style={styles.input}>
						<TextInput
							style={styles.textInput}
							placeholder="Search"
							placeholderTextColor={colors.greyText}
							onFocus={() => navigation.navigate("SearchPage")}
						/>
						<Image
							source={require("../../assets/Icons/searchIcon.png")}
							style={styles.searchIcon}
						/>
					</View>
				</View>

				<View>
					<Text style={styles.cardTitle}>Best Selling</Text>
					{/* Here it should be loaded dynamically */}
					<View style={styles.cardContainer}>
						<Animated.FlatList
							horizontal
							pagingEnabled
							showsHorizontalScrollIndicator={false}
							bounces={false}
							onScroll={Animated.event(
								[{ nativeEvent: { contentOffset: { x: scrollX } } }],
								{ useNativeDriver: false }
							)}
							scrollEventThrottle={1}
							data={DATA}
							renderItem={({ item }) => {
								return (
									<View key={item.key}>
										<Image source={item.image} style={styles.flatListImage} />
										<View style={styles.cardContents}>
											<View style={styles.cardContentsBgColor} />
											<Text style={styles.cardContentsTitle}>{item.title}</Text>
											<View style={styles.cardContentsStarsContainer}>
												<View style={styles.startContainer}>
													<Image
														source={require("../../assets/Icons/activeStar.png")}
														style={styles.cardContentsStars}
													/>
													<Image
														source={require("../../assets/Icons/activeStar.png")}
														style={styles.cardContentsStars}
													/>
													<Image
														source={require("../../assets/Icons/activeStar.png")}
														style={styles.cardContentsStars}
													/>
													<Image
														source={require("../../assets/Icons/activeStar.png")}
														style={styles.cardContentsStars}
													/>
													<Image
														source={require("../../assets/Icons/inActiveStar.png")}
														style={styles.cardContentsStars}
													/>
												</View>
												<View style={styles.cardBottomContainer}>
													<CustomSmallButton
														buttonText="Buy Now"
														backgroundColor={colors.white}
														color={colors.black}
														fontWeight={fonts.fontWeight.semiBold}
														fontSize={fonts.smallText}
													/>
													<Indicator scrollX={scrollX} />

													<Image
														source={require("../../assets/Icons/heart.png")}
														style={styles.cardBottomContainerHeart}
													/>
												</View>
											</View>
										</View>
									</View>
								);
							}}
						/>
						{/* <View style={styles.pagination}>
							<Indicator scrollX={scrollX} />
						</View> */}
					</View>
				</View>

				<View>
					<Text>Consult a vet</Text>
					<View>
						<Image
							source={require("../../assets/images/doctor.png")}
							style={styles.flatListImage}
						/>
						<View>
							<View />
							<View>
								<View>
									<Text>Talk to Experts</Text>
									<Text>Connect online with our experienced vets</Text>
								</View>
								<View>
									<TouchableOpacity>
										<View>
											<Text>View</Text>
										</View>
									</TouchableOpacity>
								</View>
							</View>
						</View>
					</View>
				</View>
			</View>
		</View>
	);
};
export default HomePage;

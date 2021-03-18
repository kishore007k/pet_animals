import React, { useState } from "react";
import {
	View,
	StyleSheet,
	Text,
	TextInput,
	Image,
	TouchableOpacity,
} from "react-native";
import axios from "axios";
import * as Google from "expo-google-app-auth";
import * as Facebook from "expo-facebook";
import colors from "../assets/constants/colors";
import fonts from "../assets/constants/fonts";
import CustomButton from "../components/CustomButton";

const appId = "1836177906531228";

const LoginPage = ({ navigation }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");
	const [data, setData] = useState({});
	const [error, setError] = useState("");
	const [accessTokens, setAccessTokens] = useState(null);

	const ANDROID_CLIENT_ID =
		"61875984150-tblrka08kf57bntbqrjak668co7ohkol.apps.googleusercontent.com";
	const IOS_CLIENT_ID =
		"61875984150-pig28f5ck3tdbetfgpvh1hi70bam5dk6.apps.googleusercontent.com";

	const cleanUp = () => {
		setUserName("");
		setPassword("");
		setEmail("");
		setError("");
	};

	const NavigateToHomeScreen = () => {
		if (isLoggedIn) {
			navigation.navigate("CustomBottomTab");
		}
	};

	const handleSignIn = () => {
		const url = "https://petanimalshyd.pythonanywhere.com/api/v1/login";
		axios
			.post(url, { user_name: userName, password: password })
			.then((res) => {
				if (res.data) {
					setData(res.data);
					setIsLoggedIn(true);
				}
			})
			.catch((err) => setError(err));
		NavigateToHomeScreen();
		cleanUp();
	};

	const signInWithGoogle = async () => {
		const { type, accessToken, user } = await Google.logInAsync({
			iosClientId: IOS_CLIENT_ID,
			androidClientId: ANDROID_CLIENT_ID,
		});

		if (type === "success") {
			/* `accessToken` is now valid and can be used to get data from the Google API with HTTP requests */
			setData(user);
			setAccessTokens(accessToken);
			setIsLoggedIn(true);
		}
		NavigateToHomeScreen();
	};

	const signInWithFacebook = async () => {
		try {
			await Facebook.initializeAsync({
				appId,
			});
			const {
				type,
				token,
				expirationDate,
				permissions,
				declinedPermissions,
			} = await Facebook.logInWithReadPermissionsAsync({
				permissions: ["public_profile"],
			});
			if (type === "success") {
				// Get the user's name using Facebook's Graph API
				const response = await fetch(
					`https://graph.facebook.com/me?access_token=${token}`
				);
				Alert.alert("Logged in!", `Hi ${(await response.json()).name}!`);
			} else {
				// type === 'cancel'
			}
		} catch ({ message }) {
			alert(`Facebook Login Error: ${message}`);
		}
		NavigateToHomeScreen();
	};

	return (
		<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
			<View style={styles.container}>
				<View style={styles.pageContainer}>
					<Text style={styles.pageTitle}>Sign In</Text>
					<View style={styles.loginContainer}>
						<View style={styles.inputContainer}>
							<Text style={styles.inputText}>User Name</Text>
							<TextInput
								onChangeText={(text) => setUserName(text)}
								value={userName}
								autoCompleteType="name"
								style={styles.inputComp}
							/>
							<View style={styles.userImageContainer}>
								<Image
									source={require("../assets/images/user.png")}
									style={styles.userImageOne}
								/>
							</View>
						</View>
						<View style={styles.inputContainer}>
							<Text style={styles.inputText}>Password</Text>
							<TextInput
								onChangeText={(text) => setPassword(text)}
								value={password}
								autoCompleteType="password"
								style={styles.inputComp}
								passwordRules
								secureTextEntry={true}
							/>
							<View style={styles.userImageContainer}>
								<Image
									source={require("../assets/images/userpass.png")}
									style={styles.userImageTwo}
								/>
							</View>
						</View>
						<Text style={styles.forgotText}>Forgot Password?</Text>
					</View>
					<View style={styles.signInBtnContainer}>
						<CustomButton buttonText="Sign In" onPressHandler={handleSignIn} />
					</View>
					<Text style={styles.option}>Or Continue with</Text>
					<View style={styles.otherOptionsContainer}>
						<View style={styles.socialContainer}>
							<Image
								source={require("../assets/images/google.png")}
								style={styles.socialImg}
							/>
							<Text style={styles.socialBtn} onPress={signInWithGoogle}>
								Google
							</Text>
						</View>
						<View style={styles.socialContainer}>
							<Image
								source={require("../assets/images/facebook.png")}
								style={styles.socialImg}
							/>
							<Text style={styles.socialBtn} onPress={signInWithFacebook}>
								Facebook
							</Text>
						</View>
					</View>
					<View style={styles.bottomTexts}>
						<Text style={styles.btmText}>Don't have an Account?</Text>
						<TouchableOpacity onPress={() => navigation.navigate("SignUpPage")}>
							<Text style={styles.btmBtn}>Sign Up</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</View>
	);
};

export default LoginPage;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: colors.primary,
		// opacity: 0.8,
		zIndex: -1,
	},
	pageContainer: {
		width: "100%",
		height: "85%",
		backgroundColor: colors.white,
		borderTopLeftRadius: 100,
		marginTop: "auto",
		opacity: 1,
	},
	pageTitle: {
		color: colors.darkGrey,
		fontSize: fonts.h1,
		fontWeight: fonts.fontWeight.large,
		textAlign: "center",
		marginTop: 40,
		marginBottom: 50,
		fontFamily: fonts.fontFamily.openSansSemiBold,
	},
	loginContainer: {
		width: "90%",
		alignItems: "center",
		justifyContent: "center",
	},
	inputContainer: {
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-evenly",
		alignItems: "center",
		marginBottom: 20,
	},
	inputComp: {
		borderWidth: 1,
		borderColor: colors.primary,
		borderRadius: 5,
		width: "100%",
		height: 50,
		marginLeft: "10%",
		paddingStart: 10,
	},
	inputText: {
		position: "absolute",
		top: -20,
		left: 50,
		zIndex: 3,
		backgroundColor: colors.white,
		padding: 10,
	},
	userImageContainer: {
		position: "absolute",
		left: "95%",
		top: 10,
		width: "100%",
		height: "100%",
	},
	userImageOne: {
		width: 20,
		height: 25,
		resizeMode: "cover",
	},
	userImageTwo: {
		width: 25,
		height: 25,
		resizeMode: "cover",
		right: 5,
	},
	forgotText: {
		color: colors.primary,
		fontWeight: fonts.fontWeight.semiBold,
		marginLeft: "auto",
		bottom: 10,
		right: -20,
	},
	signInBtnContainer: {
		width: "90%",
		marginTop: 40,
		marginRight: "auto",
		marginLeft: "auto",
		marginBottom: 40,
	},
	option: {
		textAlign: "center",
		color: colors.primary,
		fontWeight: fonts.fontWeight.semiBold,
	},
	otherOptionsContainer: {
		flexDirection: "row",
		justifyContent: "space-evenly",
		marginTop: 20,
		borderBottomWidth: 1,
		borderBottomColor: colors.lightGrey,
		paddingBottom: 20,
	},
	socialContainer: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: colors.grey,
		borderRadius: 25,
		padding: 10,
		paddingLeft: 20,
		paddingRight: 20,
	},
	socialImg: {
		marginRight: 10,
	},
	socialBtn: {
		color: colors.lightBlack,
	},
	bottomTexts: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		paddingTop: 20,
		// height: "15%",
	},
	btmText: {
		marginRight: 20,
	},
	btmBtn: {
		fontFamily: fonts.fontFamily.openSansSemiBold,
		fontSize: fonts.mediumText,
		color: colors.pink,
		fontWeight: fonts.fontWeight.semiBold,
		textDecorationLine: "underline",
	},
});

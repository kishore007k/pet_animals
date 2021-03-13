import React from "react";
import { View, Text, TextInput, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import CustomButton from "../CustomButton";

import styles from "./style";

export const LoginPage = ({
	userName,
	setUserName,
	password,
	setPassword,
	handleSignIn,
	signInWithGoogle,
	signInWithFacebook,
	navigation,
}) => {
	return (
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
								source={require("../../assets/images/user.png")}
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
								source={require("../../assets/images/userpass.png")}
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
							source={require("../../assets/images/google.png")}
							style={styles.socialImg}
						/>
						<Text style={styles.socialBtn} onPress={signInWithGoogle}>
							Google
						</Text>
					</View>
					<View style={styles.socialContainer}>
						<Image
							source={require("../../assets/images/facebook.png")}
							style={styles.socialImg}
						/>
						<Text style={styles.socialBtn} onPress={signInWithFacebook}>
							Facebook
						</Text>
					</View>
				</View>
				<View style={styles.bottomTexts}>
					<Text style={styles.btmText}>Don't have an Account?</Text>
					<TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
						<Text style={styles.btmBtn}>Sign Up</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

export const SignUpPage = ({
	userName,
	setUsername,
	password,
	setPassword,
	email,
	setEmail,
	handleSignUp,
	signInWithGoogle,
	signInWithFacebook,
	navigation,
}) => {
	return (
		<View style={styles.container}>
			<View style={styles.pageContainer}>
				<Text style={styles.pageTitle}>Sign Up</Text>
				<View style={styles.loginContainer}>
					<View style={styles.inputContainer}>
						<TextInput
							placeholder="Email"
							onChangeText={(text) => setEmail(text)}
							value={email}
							autoCompleteType="email"
							style={styles.inputComp}
						/>
					</View>
					<View style={styles.inputContainer}>
						<TextInput
							placeholder="User Name"
							onChangeText={(text) => setUserName(text)}
							value={userName}
							autoCompleteType="name"
							style={styles.inputComp}
						/>
					</View>
					<View style={styles.inputContainer}>
						<TextInput
							placeholder="Password"
							onChangeText={(text) => setPassword(text)}
							value={password}
							autoCompleteType="password"
							style={styles.inputComp}
							passwordRules
							secureTextEntry
						/>
					</View>
				</View>
				<View style={styles.signInBtnContainer}>
					<CustomButton buttonText="Sign Up" onPressHandler={handleSignUp} />
				</View>
				<Text style={styles.option}>Or Continue with</Text>
				<View style={styles.otherOptionsContainer}>
					<View style={styles.socialContainer}>
						<Image
							source={require("../../assets/images/google.png")}
							style={styles.socialImg}
						/>
						<Text style={styles.socialBtn} onPress={signInWithGoogle}>
							Google
						</Text>
					</View>
					<View style={styles.socialContainer}>
						<Image
							source={require("../../assets/images/facebook.png")}
							style={styles.socialImg}
						/>
						<Text style={styles.socialBtn} onPress={signInWithFacebook}>
							Facebook
						</Text>
					</View>
				</View>
				<View style={styles.bottomTexts}>
					<Text style={styles.btmText}>Already have an Account?</Text>
					<TouchableOpacity onPress={() => navigation.navigate("Login")}>
						<Text style={styles.btmBtn}>Sign In</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

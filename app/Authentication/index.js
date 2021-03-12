import React, { useState } from "react";
import { LoginPage, SignUpPage } from "../components/LoginAndSignUpPage";
import axios from "axios";
import * as Google from "expo-google-app-auth";
import * as Facebook from "expo-facebook";

const appId = "1836177906531228";

const [isLoggedIn, setIsLoggedIn] = useState(false);
const [hasAnAccount, setHasAnAccount] = useState(true);
const [userName, setUserName] = useState("");
const [password, setPassword] = useState("");
const [email, setEmail] = useState("");
const [data, setData] = useState({});
const [error, setError] = useState("");
const [accessTokens, setAccessTokens] = useState(null);
const [isCancelled, setIsCancelled] = useState(false);

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
};

const handleSignUp = () => {
	// This will handle the signUp function
	const url = "https://petanimalshyd.pythonanywhere.com/api/v1/register";
	axios
		.post(url, {
			username: userName,
			password: password,
			email: email,
		})
		.then((res) => setData(res))
		.catch((err) => setError(err));
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
};

const Authentication = () => {
	return (
		<>
			<LoginPage
				userName={userName}
				setUserName={setUserName}
				password={password}
				setPassword={setPassword}
				handleSignIn={handleSignIn}
				signInWithGoogle={signInWithGoogle}
				signInWithFacebook={signInWithFacebook}
			/>
			<SignUpPage
				userName={userName}
				setUserName={setUserName}
				password={password}
				setPassword={setPassword}
				email={email}
				setEmail={setEmail}
				handleSignUp={handleSignUp}
				signInWithGoogle={signInWithGoogle}
				signInWithFacebook={signInWithFacebook}
			/>
		</>
	);
};

export default Authentication;

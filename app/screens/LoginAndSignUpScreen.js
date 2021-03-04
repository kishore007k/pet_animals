import React, { useState } from "react";
import { View } from "react-native";
import { LoginPage, SignUpPage } from "../components/LoginAndSignUpPage";
import LandingScreen from "../screens/LandingScreen";
import MobileVerification from "../screens/MobileVerification";
import UserLocationScreen from "../screens/UserLocationScreen";
import LoadingScreen from "../screens/LoadingScreen";
import axios from "axios";

const LoginAndSignUpScreen = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [hasAnAccount, setHasAnAccount] = useState(false);
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");
	const [data, setData] = useState({});
	const [error, setError] = useState("");

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

	console.log(data);

	return (
		<View>
			{!isLoggedIn ? (
				<View>
					{/* <LandingScreen /> */}
					{!hasAnAccount ? (
						<LoginPage
							userName={userName}
							setUserName={setUserName}
							password={password}
							setPassword={setPassword}
							handleSignIn={handleSignIn}
						/>
					) : (
						<SignUpPage
							userName={userName}
							setUserName={setUserName}
							password={password}
							setPassword={setPassword}
							email={email}
							setEmail={setEmail}
							handleSignUp={handleSignUp}
						/>
					)}
				</View>
			) : (
				<View style={{ width: "100%", height: "100%" }}>
					<MobileVerification />
					<UserLocationScreen />
					<LoadingScreen />
				</View>
			)}
		</View>
	);
};

export default LoginAndSignUpScreen;

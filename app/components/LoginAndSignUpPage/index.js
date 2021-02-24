import React, { useState } from "react";
import { View, Text, Button, TextInput, Image } from "react-native";
import colors from "../../assets/constants/colors";


import styles from "./style";

const LoginAndSignUpPage = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleSignIn = () => {
        // The handle sign In function will be implemented later once the backend is over
    }

    return(
        <View style={styles.container}>
            <View style={styles.pageContainer}>
                <Text style={styles.pageTitle}>Sign In</Text>
                <View style={styles.loginContainer}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputText}>User Name</Text>
                        <TextInput onChange={(text) => setUserName(text)} value={userName} autoCompleteType="name" style={styles.inputComp} />
                        <View style={styles.userImageContainer}>
                            <Image source={require("../../assets/images/user.png")} style={styles.userImageOne} />
                        </View>
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputText}>Password</Text>
                        <TextInput onChange={(text) => setPassword(text)} value={password} autoCompleteType="password" style={styles.inputComp} />
                        <View style={styles.userImageContainer}>
                            <Image source={require("../../assets/images/userpass.png")} style={styles.userImageTwo} />
                        </View>
                    </View>
                    <Text style={styles.forgotText}>Forgot Password?</Text>
                </View>
                <View style={styles.signInBtnContainer}>
                    <Button title="Sign In" onClick={handleSignIn} color={colors.pink} />
                </View>
                <Text style={styles.option}>Or Continue with</Text>
                <View style={styles.otherOptionsContainer}>
                    <View style={styles.socialContainer}>
                        <Image source={require("../../assets/images/google.png")} style={styles.socialImg} />
                        <Text style={styles.socialBtn}>
                            Google
                        </Text>
                    </View>
                    <View style={styles.socialContainer}>
                        <Image source={require("../../assets/images/facebook.png")} style={styles.socialImg} />
                        <Text style={styles.socialBtn}>
                            Facebook
                        </Text>
                    </View>
                </View>
                <View style={styles.bottomTexts}>
                    <Text style={styles.btmText}>Don't have an Account?</Text>
                    <Text style={styles.btmBtn}>Sign Up</Text>
                </View>
            </View>
        </View>
    );
};

export default LoginAndSignUpPage;
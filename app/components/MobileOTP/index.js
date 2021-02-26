import React, { useState, useRef } from "react";
import { View, Text, Image, TextInput, Button } from "react-native";
import ModalDropdown from "react-native-modal-dropdown";
import colors from "../../assets/constants/colors";
import fonts from "../../assets/constants/fonts";

import styles from "./style";


export const MobileOTP = () => {
    const data = [ "India (+91)", "USA (+1)", "Canada (+1)", "Germany (+49)", "South Africa (+27)", "France (+33)", "Spain (+34)" ];
    
    const [country, setCountry] = useState("India (+91)");
    const [phNum, setPhNum] = useState("");

    const handleAddingNumber = () => {
        // This is used to add the number that the user gives
    };

    return (
        <View style={styles.container}>
            <View style={styles.pageContainer}>
                <Text style={styles.desc}>We need to send OTP in order to authenticate your phone number</Text>
                <ModalDropdown  
                    animated={true} 
                    options={data} 
                    onSelect={(index, value) => setCountry(value)} 
                    style={styles.dropDown}
                    textStyle={{fontSize: fonts.h2, fontWeight: fonts.fontWeight.semiBold }}
                    // dropdownStyle={{ width: "80%" }}
                    dropdownTextStyle={{ fontSize: fonts.mediumText, textAlign: "center", }}
                >
                    <View style={styles.inputTextAndIcon}>
                        <Text style={styles.country}>{country}</Text>
                        <Image source={require("../../assets/images/ArrowDown.png")} style={styles.arrow} />
                    </View>
                </ModalDropdown>
                <View style={styles.bottomDash} />
                <TextInput 
                    onChangeText={(text) => setPhNum(text)}
                    value={phNum}
                    style={styles.inputComp}
                    placeholder="Phone Number"
                    keyboardType={"numeric"}
                    maxLength={10}
                    autoFocus
                />
                <View style={styles.btn}>
                    <Button title="Continue" onPress={handleAddingNumber} color={colors.pink} />
                </View>
            </View>
        </View>
    );
};


export const MobileOTPVerification = () => {
    const [otpArray, setOtpArray] = useState([]);

      // TextInput refs to focus programmatically while entering OTP
    const firstTextInputRef = useRef(null);
    const secondTextInputRef = useRef(null);
    const thirdTextInputRef = useRef(null);
    const fourthTextInputRef = useRef(null);

    const handleOtpChange = (index) => {
        return value => {
            if (isNaN(Number(value))) {
            // do nothing when a non digit is pressed
            return;
            }
            const otpArrayCopy = otpArray.concat();
            otpArrayCopy[index] = value;
            setOtpArray(otpArrayCopy);
    
            // auto focus to next InputText if value is not blank
            if (value !== '') {
                if (index === 0) {
                    secondTextInputRef.current.focus();
                } else if (index === 1) {
                    thirdTextInputRef.current.focus();
                } else if (index === 2) {
                    fourthTextInputRef.current.focus();
                }
            }
        };
    };

    return (
        <View style={styles.container}>
            <View style={styles.pageContainer}>
                <View style={styles.mainContent}>
                    <Text style={styles.mainTitle}>Verifying your number</Text>
                    <Text style={styles.para}>We have sent the OTP to +91 9988776655</Text>
                </View>
                <View style={styles.otpArea}>
                    <TextInput />
                </View>
            </View>
        </View>
    );
};
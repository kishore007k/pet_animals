import React, { useState } from "react";
import { View, Text, Image, TextInput, Button } from "react-native";
import ModalDropdown from "react-native-modal-dropdown";
import { LearnMoreLinks } from "react-native/Libraries/NewAppScreen";
import colors from "../../assets/constants/colors";
import fonts from "../../assets/constants/fonts";
import style from "../LoginAndSignUpPage/style";

import styles from "./style";


const MobileOTP = () => {
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
                    autoCompleteType="cc-number"
                    style={styles.inputComp}
                    placeholder="Phone Number"
                />
                <View style={styles.btn}>
                    <Button title="Continue" onPress={handleAddingNumber} color={colors.pink} />
                </View>
            </View>
        </View>
    );
};

export default MobileOTP;
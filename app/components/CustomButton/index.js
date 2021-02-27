import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./style";

const CustomButton = ({ buttonText, onPressHandler}) => {
    return (
        <TouchableOpacity onPress={onPressHandler}>
            <View style={styles.btn}>
                <Text style={styles.btnText}>{ buttonText }</Text>
            </View>
        </TouchableOpacity>
    );
};

export default CustomButton;
import React from "react";
import { Text, View } from "react-native";
import styles from "./style";

const SamplePage = () => {
	return (
		<View style={styles.sample}>
			<Text style={styles.sampleText}>Sample Text</Text>
		</View>
	);
};

export default SamplePage;

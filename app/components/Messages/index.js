import React, { useState } from "react";
import {
	View,
	Text,
	Image,
	TextInput,
	ScrollView,
	TouchableOpacity,
	FlatList,
} from "react-native";
import styles from "./style";

const chatArray = [
	{
		image: require("../../assets/images/chats/person1.png"),
		title: "Kishore",
		para: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",
		time: "2 min",
		read: true,
		key: "1",
	},
	{
		image: require("../../assets/images/chats/person2.png"),
		title: "Kumar",
		para: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",
		time: "2 min",
		read: true,
		key: "2",
	},
	{
		image: require("../../assets/images/chats/person3.png"),
		title: "Abi",
		para: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",
		time: "2 min",
		read: false,
		key: "3",
	},
	{
		image: require("../../assets/images/chats/person4.png"),
		title: "Mash",
		para: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",
		time: "2 min",
		read: false,
		key: "4",
	},
];

const Messages = ({ navigation }) => {
	const [searchText, setSearchText] = useState("");

	return (
		<View style={styles.container}>
			<View style={styles.cover}>
				<FlatList
					data={chatArray}
					ListHeaderComponent={
						<>
							<Text style={styles.mainTitle}>Chats</Text>
							<View style={styles.inputContainer}>
								<Image
									source={require("../../assets/Icons/searchIcon.png")}
									style={styles.searchIcon}
								/>
								<TextInput
									placeholder="Search Chats"
									style={styles.input}
									value={searchText}
									onChangeText={(text) => setSearchText(text)}
								/>
							</View>
						</>
					}
					renderItem={({ item }) => {
						return (
							<TouchableOpacity
								key={item.key}
								onPress={() =>
									navigation.navigate("ChatScreen", { userName: item.title })
								}
							>
								<View
									style={
										item.read ? styles.cardActiveContainer : styles.cardInactiveContainer
									}
								>
									<View>
										<Image source={item.image} style={styles.profilePic} />
									</View>
									<View style={styles.profileContent}>
										<Text style={styles.profileTitle}>{item.title}</Text>
										<Text style={styles.profilePara}>{item.para}</Text>
									</View>
									<View>
										<Text style={styles.profileTime}>{item.time}</Text>
									</View>
								</View>
							</TouchableOpacity>
						);
					}}
				/>
			</View>
		</View>
	);
};
export default Messages;

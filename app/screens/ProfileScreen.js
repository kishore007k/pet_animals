import React from "react";
import {
	View,
	Text,
	Image,
	TouchableOpacity,
	ScrollView,
	SafeAreaView,
	StyleSheet,
} from "react-native";
``;

const Profile = () => {
	return (
		<SafeAreaView>
			<ScrollView>
				<View style={Styles.Container}>
					<View style={Styles.pageContainer}>
						<View style={{ alignItems: "center" }}>
							<Image
								source={require("../assets/images/profileImg.png")}
								style={{ marginTop: -60 }}
							/>
						</View>

						<View style={Styles.Details}>
							<View style={Styles.PersonDetail}>
								<Text style={{ fontSize: 30 }}>Monisha</Text>
								<View style={{ flexDirection: "row" }}>
									<Text style={{ fontSize: 15, marginTop: 15 }}>9988776655</Text>
									<Text style={{ fontSize: 15, marginLeft: 40, marginTop: 15 }}>
										xyg@gmail.com
									</Text>
									<TouchableOpacity
										onPress={() => {
											alert("Hello");
										}}
									>
										<Text
											style={{
												marginLeft: "38%",
												marginTop: -10,
												fontSize: 18,
												color: "#162593",
												fontWeight: "bold",
											}}
										>
											EDIT
										</Text>
									</TouchableOpacity>
								</View>
							</View>

							<View style={Styles.Address}>
								<Text style={{ fontSize: 25 }}>Address</Text>
								<Text style={{ marginTop: 10, marginRight: 40 }}>
									no 24, 2nd cross, BHCS Layout, padmanabanagar, Banglore-23
								</Text>
								<TouchableOpacity onPress={() => alert("Hello")}>
									<Text
										style={{
											marginLeft: "86%",
											marginTop: -50,
											fontSize: 18,
											color: "#162593",
											fontWeight: "bold",
										}}
									>
										EDIT
									</Text>
								</TouchableOpacity>
							</View>

							<View style={Styles.MyWallet}>
								<TouchableOpacity>
									<Text style={{ fontSize: 20 }}>My Wallet</Text>
								</TouchableOpacity>
							</View>

							<View style={Styles.MyWallet}>
								<TouchableOpacity>
									<Text style={{ fontSize: 20 }}>Delivery Agent</Text>
								</TouchableOpacity>
							</View>

							<View style={Styles.MyWallet}>
								<TouchableOpacity>
									<Text style={{ fontSize: 20 }}>Pet Health record</Text>
								</TouchableOpacity>
							</View>

							<View style={Styles.MyWallet}>
								<TouchableOpacity>
									<Text style={{ fontSize: 20 }}>Blog</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

const Styles = StyleSheet.create({
	Container: {
		backgroundColor: "#162593",
		width: "100%",
		height: "200%",
		flex: 1,
		position: "relative",
	},
	pageContainer: {
		backgroundColor: "#fff",
		height: 660,
		width: "100%",
		marginTop: "40%",
		borderTopEndRadius: 100,
		borderTopStartRadius: 100,
	},
	Details: {
		// paddingHorizontal: 10,
		flexDirection: "column",
	},
	PersonDetail: {
		height: "18%",
		width: "100%",
		backgroundColor: "#f5f5f5",
		marginTop: 50,
		padding: 10,
	},
	Address: {
		height: "18%",
		width: "100%",
		backgroundColor: "#f5f5f5",
		marginTop: 10,
		padding: 10,
		// borderRadius: 20,
	},
	MyWallet: {
		height: "8%",
		width: "100%",
		backgroundColor: "#f5f5f5",
		marginTop: 10,
		padding: 10,
		// borderRadius: 20,
		alignContent: "center",
	},
});

export default Profile;

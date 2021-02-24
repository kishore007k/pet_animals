import { StyleSheet } from "react-native";
import colors from "../../assets/constants/colors";
import fonts from "../../assets/constants/fonts";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        height: "100%",
		flexDirection: 'row',
		backgroundColor: colors.white,
		alignItems: 'center',
		justifyContent: 'center',
        backgroundColor: colors.primary,
        // opacity: 0.8,
        zIndex: -1,
    },
    pageContainer: {
        width: "100%",
        height: "85%",
        backgroundColor: colors.white,
        borderTopLeftRadius: 100,
        marginTop: "auto",
        opacity: 1,
    },
    pageTitle: {
        color: colors.darkGrey,
        fontSize: fonts.h2,
        fontWeight: fonts.fontWeight.large,
        textAlign: "center",
        marginTop: 40,
        marginBottom: 50,
    },
    loginContainer: {
        width:"90%",
        alignItems: "center",
        justifyContent: "center",
    },
    inputContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        marginBottom: 20,
    },
    inputComp: {
        borderWidth: 1,
        borderColor: colors.primary,
        borderRadius: 5,
        width: "100%",
        height: 50,
        marginLeft: "10%",
    },
    inputText: {
        position: "absolute",
        top: -20,
        left: 50,
        zIndex: 3,
        backgroundColor: colors.white,
        padding: 10,
    },
    userImageContainer: {
        position: "absolute",
        left: "95%",
        top: 10,
        width: "100%",
        height: "100%",
    },
    userImageOne: {
        width: 20,
        height: 25,
        resizeMode: "cover",
    },
    userImageTwo: {
        width: 25,
        height: 25,
        resizeMode: "cover",
        right: 5,
    },
    forgotText: {
        color: colors.primary,
        fontWeight: fonts.fontWeight.semiBold,
        marginLeft: "auto",
        bottom: 10,
        right: -20,
    },
    signInBtnContainer: {
        width: "90%",
        marginTop: 40,
        marginRight: "auto",
        marginLeft: "auto",
        marginBottom: 40,
    },
    option: {
        textAlign: "center",
        color: colors.primary,
        fontWeight: fonts.fontWeight.semiBold,
    },
    otherOptionsContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 20,
        borderBottomWidth: 1,
        borderBottomColor: colors.lightGrey,
        paddingBottom: 20,
    },
    socialContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: colors.grey,
        borderRadius: 25,
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
    },
    socialImg: {
        marginRight: 10,
    },
    socialBtn: {
        color: colors.lightBlack,
    },
    bottomTexts: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: "15%",
    },
    btmText: {
        marginRight: 20,
    },
    btmBtn: {
        color: colors.pink,
        fontWeight: fonts.fontWeight.bold,
    }
});
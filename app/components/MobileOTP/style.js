import { StyleSheet } from "react-native";
import colors from "../../assets/constants/colors";
import fonts from "../../assets/constants/fonts";


export default styles = StyleSheet.create({
    container: {
        flex: 1,
        height: "100%",
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
        backgroundColor: colors.primary,
        zIndex: -1,
    },
    pageContainer: {
        width: "100%",
        height: "85%",
        backgroundColor: colors.white,
        borderTopLeftRadius: 100,
        marginTop: "auto",
    },
    desc: {
        maxWidth: "60%",
        width: "100%",
        marginLeft: "auto",
        marginRight: "auto",
        top: 50,
        fontSize: fonts.mediumText,
        lineHeight: 24,
        fontWeight: fonts.fontWeight.regular,
        marginBottom: 60,
        textAlignVertical: "top",
    },
    dropDown: {
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 60,
        marginBottom: 10,
    },
    bottomDash: {
        width: "80%",
        height: 2,
        backgroundColor: colors.primary,
        borderBottomWidth: 1,
        borderBottomColor: colors.primary,
        marginRight: "auto",
        marginLeft: "auto",
    },
    inputTextAndIcon: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
    },
    arrow: {
        width: 20,
        height: 20,
        marginLeft: 20,
    },
    country: {
        color: colors.lightBlack,
        fontSize: fonts.h2,
    },
    inputComp: {
        borderWidth: 1,
        borderColor: colors.primary,
        borderRadius: 5,
        width: "80%",
        height: 50,
        marginTop: 40,
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: 40,
        paddingStart: 10,
    },
    btn: {
        height: 50,
        width: "80%",
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius: 5,
    },
});
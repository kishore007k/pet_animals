import { StyleSheet } from "react-native";
import colors from "../../assets/constants/colors";
import fonts from "../../assets/constants/fonts";

export default styles = StyleSheet.create({
    btn: {
        width: "80%",
        backgroundColor: colors.pink,
        marginRight: "auto",
        marginLeft: "auto",
        borderRadius: 5,
    },
    btnText: {
        paddingTop: 5,
        paddingBottom: 5,
        fontSize: fonts.h2,
        fontWeight: fonts.fontWeight.semiBold,
        color: colors.whiteText,
    },
});
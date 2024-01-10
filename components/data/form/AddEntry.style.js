import { StyleSheet, Dimensions } from "react-native";

import { COLORS, SIZES, FONT } from "../../../constants";

const styles = StyleSheet.create({
    scrollViewContainer: {
        alignContent: "center",
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 20,
    },
    pickerStyle: {
        marginTop: -25,
        marginBottom: -25
    },
    dateInput: {
        alignSelf: "center",
        marginTop: 15,
        marginBottom: 25,
    },
    centerInputLabel: {
        textAlign: "center",
        fontFamily: FONT.bold,
        fontSize: SIZES.large
    },
    inputLabel: {
        fontFamily: FONT.bold,
        fontSize: SIZES.large
    },
    input: {
        fontFamily: FONT.regular,
        color: "#000000",
        height: SIZES.largest,
        borderWidth: 1,
        borderColor: COLORS.gray,
        paddingLeft: 5,
        paddingRight: 5,
        marginBottom: 25,
    },
    btn: {
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 15,
        elevation: 3,
        backgroundColor: '#000000',
        marginTop: 25,
    },
    btnText: {
        color: '#ffffff',
    }
})

export default styles;
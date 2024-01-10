import { StyleSheet } from "react-native";

import { COLORS, SIZES, FONT } from "../../../constants";

const styles = StyleSheet.create({
    headerContainer: {
        borderColor: "#00000000",
        borderRadius: 30,
        height: 100,
        borderWidth: 15,
        justifyContent: "center",
        alignItems: "left"
    },
    header: {
        fontSize: SIZES.xxLarge,
        fontFamily: FONT.bold
    },
    main: {
        fontSize: SIZES.largest,
        fontFamily: FONT.bold
    }
})

export default styles;
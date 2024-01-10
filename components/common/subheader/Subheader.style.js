import { StyleSheet } from "react-native";

import { COLORS, SIZES, FONT } from "../../../constants";

const styles = StyleSheet.create({
    headerContainer: {
        marginLeft: 15,
        justifyContent: "center",
        alignItems: "left"
    },
    main: {
        fontSize: SIZES.large,
        fontFamily: FONT.bold
    }
})

export default styles;
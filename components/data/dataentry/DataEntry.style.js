import { StyleSheet } from "react-native";

import { COLORS, SIZES, FONT } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        marginTop: SIZES.xSmall
    },
    dataEntryStyle: (type) => ({        
        justifyContent: 'center', //Centered vertically
        alignItems: 'center', //Centered horizontally
        fontSize: SIZES.medium,
        fontFamily: FONT.regular,
        flexDirection: "row",
        height: SIZES.largest,
        borderRadius: SIZES.medium,
        backgroundColor: type === "incoming" ? "#66ff66" : "#ff704d",
    }),
    amountStyle : {
        marginRight: 30,
        flex: 0
    },
    categoryStyle : {
        marginLeft: 30,
        flex: 1
    }
})

export default styles;
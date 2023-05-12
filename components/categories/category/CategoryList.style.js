import { StyleSheet } from "react-native";
import { COLORS, FONT, ICONS } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        marginTop:40,
        flexDirection: 'column',
        alignItems: "center",
        justifyContent: "center",
    },

    hotToday: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%"
    },
    innerHotToday: {
        flexDirection:"row",
        width: 200,
        alignItems: "center",
    },

    image: {
        width: ICONS.XS,
        marginRight: 15,
        height: ICONS.XS
    },

    hotText: {
        fontFamily: FONT.bold,
        color: COLORS(true).primary,
        fontSize: 20,
    },

    btnText: {
        color: COLORS(false).tertiary,
        fontFamily: FONT.bold,
        fontSize: 14,
    },
})

export default styles
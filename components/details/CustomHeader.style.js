import { StyleSheet } from "react-native";
import { COLORS, ICONS, RADIUS } from "../../constants";


let isDark = false;
const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: -20,
        flexDirection: 'row',
        justifyContent: "left",
        alignItems: 'center',
        width: "100%",
        height: 200,
        paddingHorizontal: 25,
        zIndex: 100,
    },

    Image: {
        transform:  [
            { scaleX: -1 }
        ],
        width: "100%",
        height: "100%",
        borderRadius: RADIUS.M,
    },

    Btn: {
        width: ICONS.M,
        height: ICONS.M,
        padding: 7,
        paddingRight: 10,
        borderRadius: RADIUS.M,
        backgroundColor: COLORS(isDark).primary_second,
        justifyContent: "center",
        alignItems: "center",
    },




})

export { styles }
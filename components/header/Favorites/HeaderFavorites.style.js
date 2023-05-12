import { StyleSheet } from "react-native"
import { ICONS, COLORS, RADIUS } from "../../../constants"


let isDark = false;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS(isDark).primary_second,
        borderRadius: RADIUS.M,
        width: ICONS.M,
        height: ICONS.M,
    },

    headerLogo: {
        width: ICONS.XS,
        height: ICONS.XS
    }
})


export {styles}
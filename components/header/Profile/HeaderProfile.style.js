import { StyleSheet } from "react-native"
import { FONT, ICONS, RADIUS } from "../../../constants"


const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    btnHeader: {
        width: ICONS.M,
        height: ICONS.M,
        borderRadius: RADIUS.M,
    },

    headerLogo: {
        width: '100%',
        height: '100%',
        borderRadius: RADIUS.M,
    }
})


export {styles}
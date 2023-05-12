import { StyleSheet } from "react-native";
import { COLORS, FONT } from "../../constants";


const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        width:'100%',
    },

    head_text: {
        color: COLORS(false).tertiary,
        fontFamily: FONT.bold,
        fontSize: 16,
        marginBottom: 5,
    },

    slogan: {
        color: COLORS(true).primary,
        fontFamily: FONT.bold,
        fontSize: 33,
        marginBottom: 30,

    }
})


export default styles
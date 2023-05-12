import { StyleSheet } from "react-native";
import { COLORS, FONT, ICONS, TEXT } from "../../../constants";


const styles = StyleSheet.create({
    container: {
        width: "100%",
        maxWidth: 400,
        height: 55 ,
        borderRadius: 25,
        backgroundColor: COLORS(false).primary_second,
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },

    image_design: {
        width: ICONS.XS,
        height: ICONS.XS,
        marginRight: 5,
    },

    search_container: {
        width: ICONS.XS,
        height:ICONS.XS,
        justifyContent: 'center',
        alignItems: 'center',
    },

    search_image: {
        width: '100%',
        height: '100%',
    },

    input: {
        width:220,
        color: COLORS(false).tertiary,
        fontFamily: FONT.bold,
        fontSize: TEXT.XXS,
        borderWidth: 0,
    }
})


export default styles
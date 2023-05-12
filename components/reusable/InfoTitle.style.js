import { StyleSheet } from "react-native";
import { COLORS, FONT } from "../../constants";


const styles = StyleSheet.create({
    container: {
        width: 200,
        flexDirection: "column",
    },

    ImageWrapper: {
        width:"100%",
        borderRadius: 10,
        marginBottom: 15,
        height: 270,

    },
    Image: {
        width:"100%",
        borderRadius: 10,
        backgroundColor: COLORS(false).primary_second,
        height:"100%",
    },

    TextWrapper: {
        width:'100%',
    },

    title: {
        fontFamily: FONT.bold,
        fontSize: 16,
    }

});

export default styles
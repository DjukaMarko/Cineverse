import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";


const styles = StyleSheet.create({
    container: {
        width: 200,
        flexDirection: "column",
    },

    skeletonImage: {
        width:"100%",
        borderRadius: 10,
        marginBottom: 15,
        height: 270,
        backgroundColor: COLORS(false).primary_second,

    },

    skeletonTextWrapper: {
        flexDirection: 'column',
        width:'100%',
    },

    skeletonText1: {
        width:"70%",
        height: 40,
        marginBottom: 7,
        backgroundColor: COLORS(false).primary_second,
        borderRadius: 10,
    },

    skeletonText2: {
        width:"100%",
        height: 40,
        backgroundColor: COLORS(false).primary_second,
        borderRadius: 10,
    }

});

export default styles
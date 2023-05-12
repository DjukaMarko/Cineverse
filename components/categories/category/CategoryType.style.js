import { StyleSheet } from "react-native";
import { COLORS, FONT } from "../../../constants";


const styles = StyleSheet.create({
    container: (isSelected, isLoading) => ({
        width: 100,
        height: 35,
        borderRadius: 20,
        backgroundColor: isLoading ? COLORS(false).primary_second : isSelected ? COLORS(true).primary_second : COLORS(false).primary_second,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 5,
    }),

    text: (isSelected) => ({
        color: isSelected ? COLORS(false).primary: COLORS(true).primary,
        fontFamily: FONT.bold,
        fontSize: 12,
    })

})

export default styles
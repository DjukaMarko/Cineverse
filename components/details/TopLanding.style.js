import { Dimensions, StyleSheet } from "react-native";

let ScreenHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
    container: {
        width: "100%",
        position: "relative",
        height: ScreenHeight,
        backgroundColor: "black"
    },

    Image: {
        width:"100%",
        height:ScreenHeight,
        top:0,
        position: "absolute",
        opacity: 0.5,
    }
});

export { styles }
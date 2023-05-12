import { StyleSheet } from "react-native";
import { COLORS } from "../constants";

const styles = (isDark) => {
    return (StyleSheet.create({
        container: {
            backgroundColor: COLORS(isDark).primary,
            marginBottom:100,
        }
    }))
}




export { styles }
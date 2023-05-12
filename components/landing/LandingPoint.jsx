import { Image, Text, TextInput, View } from "react-native"
import CustomSearchBar from "./search/CustomSearchBar"
import styles from "./LandingPoint.style"



const LandingPoint = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.head_text}>Cineverse</Text>
            <Text style={styles.slogan}>Experience life beyond your own through movies.</Text>
            <CustomSearchBar />
        </View>
    )
}

export default LandingPoint
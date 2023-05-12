import { Image, TextInput, TouchableOpacity, View } from "react-native"
import styles from "./CustomSearchBar.style"
import { popcorn, right_dark } from "../../../constants"

const CustomSearchBar = () => {
    return (
        <View style={styles.container}>
            <Image
                source={popcorn}
                style={styles.image_design} 
            />
            <TextInput 
                style={styles.input}
                placeholder="What should I watch today?"
            />

            <TouchableOpacity style={styles.search_container}>
                <Image
                    source={right_dark}
                    style={styles.search_image} 
                />
            </TouchableOpacity>
        </View>
    )
}


export default CustomSearchBar
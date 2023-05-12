import { Text, TouchableOpacity } from "react-native"
import styles from "./CategoryType.style"


const CategoryType = ({ item, isSelected, onPress, isLoading }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container(isSelected, isLoading)}>
            {!isLoading && <Text style={styles.text(isSelected)}>{item}</Text> }
        </TouchableOpacity>
    )
}


export default CategoryType
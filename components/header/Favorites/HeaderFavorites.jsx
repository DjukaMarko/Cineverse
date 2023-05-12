import react from "react"
import { Image, TouchableOpacity, View } from "react-native"
import { styles } from "./HeaderFavorites.style"
import { favorite_star } from "../../../constants"
const HeaderFavorites = () => {
    return (
        <TouchableOpacity style={styles.container}>
            <Image
                source={favorite_star}
                style={styles.headerLogo}
            />
        </TouchableOpacity>
    )
}


export default HeaderFavorites
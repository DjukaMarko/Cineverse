import react from "react"
import { Image, TouchableOpacity, View } from "react-native"
import { styles } from "./HeaderMenu.style"
import { menu_dark } from "../../../constants"
const HeaderMenu = () => {
    return (
        <TouchableOpacity style={styles.container}>
            <Image
                source={menu_dark}
                style={styles.headerLogo}
            />
        </TouchableOpacity>
    )
}


export default HeaderMenu
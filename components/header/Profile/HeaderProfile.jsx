import react from "react"
import { Image, Text, TouchableOpacity, View } from "react-native"
import { FONT, profile_icon } from "../../../constants"
import { styles } from "./HeaderProfile.style"
const HeaderProfile = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.btnHeader}>
                <Image
                    source={profile_icon}
                    style={styles.headerLogo}
                />
            </TouchableOpacity>
        </View>
    )
}


export default HeaderProfile
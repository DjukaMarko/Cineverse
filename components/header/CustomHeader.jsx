import react from "react";
import { View } from "react-native";
import styles from "./CustomHeader.style.js"
import HeaderProfile from "./Profile/HeaderProfile.jsx";
import HeaderFavorites from "./Favorites/HeaderFavorites.jsx";
import HeaderMenu from "./Menu/HeaderMenu.jsx";


const CustomHeader = () => {
    return (
        <View style={styles.container}> 
            <HeaderMenu />
            <HeaderFavorites />
            <HeaderProfile />
        </View>
    )
}


export default CustomHeader
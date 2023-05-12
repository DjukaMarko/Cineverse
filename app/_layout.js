import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";

SplashScreen.preventAutoHideAsync()
const Layout = () => {
    const [fontsLoaded] = useFonts({
        MSRegular: require("../assets/fonts/Montserrat/static/Montserrat-Regular.ttf"),
        MSBold: require("../assets/fonts/Montserrat/static/Montserrat-Bold.ttf"),
    });

    if(!fontsLoaded) {
        return null;
    }

    function onChangeLayout() {
        if(fontsLoaded) {
            SplashScreen.hideAsync()
        }
    }

    return <Stack onLayout={onChangeLayout} />
}

export default Layout;
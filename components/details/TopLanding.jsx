import { Image, Text, View } from "react-native";
import { styles } from "./TopLanding.style";
import { LazyLoadImage } from "react-native-lazy-load-image";


const TopLanding = ( { returnedData }) => {
    console.log(returnedData.results?.primaryImage?.url);
    return (
        <View style={styles.container}>
            <LazyLoadImage
                source={{ uri: returnedData?.results?.primaryImage?.url }}
                style={styles.Image}
            />
            <Text style={{ color: "white" }}>heyy</Text>
        </View>
    )
};

export default TopLanding
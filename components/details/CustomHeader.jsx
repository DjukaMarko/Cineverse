import { Image, TouchableOpacity, View } from "react-native";
import { right_dark } from "../../constants";
import { styles } from "./CustomHeader.style";
import { useRouter } from "expo-router";
const CustomHeader = () => {
    const router = useRouter();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => {router.back()}} style={styles.Btn}>
        <Image 
            style={styles.Image}
            source={right_dark} 
        />
      </TouchableOpacity>
    </View>
  );
};

export default CustomHeader

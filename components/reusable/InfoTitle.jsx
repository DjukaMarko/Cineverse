import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./InfoTitle.style";
import { useRouter } from "expo-router";
import { useState } from "react";
import { LazyLoadImage } from "react-native-lazy-load-image";
const InfoTitle = ({ item }) => {
  const router = useRouter();
  const handlePress = () => {
    router.push(`/details/${item.id}`);
  };

  console.log(item?.primaryImage?.url);

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <View style={styles.ImageWrapper}>
        <LazyLoadImage
          style={styles.Image}
          source={{ uri: item?.primaryImage?.url }}
          resizeMode={"cover"}
        />
      </View>
      <View style={styles.TextWrapper}>
        <Text style={styles.title}>{item.titleText.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default InfoTitle;

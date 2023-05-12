import { View } from "react-native"
import styles from "./SkeletonComponent.style"

const SkeletonComponent = () => {
    return (
        <View style={styles.container}>
            <View style={styles.skeletonImage}></View>
            <View style={styles.skeletonTextWrapper}>
                <View style={styles.skeletonText1}></View>
                <View style={styles.skeletonText2}></View>
            </View>
        </View>
    )
}

export default SkeletonComponent
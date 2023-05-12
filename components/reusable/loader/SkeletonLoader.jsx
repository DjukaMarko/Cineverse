import { FlatList, View } from "react-native"
import SkeletonComponent from "./SkeletonComponent"
import styles from "./SkeletonLoader.style"
const SkeletonLoader = () => {
    return (
        <View style={styles.container}>
            <FlatList 
                data={[1,2,3,4,5,6]}
                ItemSeparatorComponent={<View style={{ width: 10 }} />}
                horizontal
                renderItem={() => (
                    <SkeletonComponent />
                )}
                keyExtractor={item => item}
            />
        </View>
    )
}

export default SkeletonLoader
import { FlatList, ScrollView, View } from "react-native"
import styles from "./InfoTitleList.style"
import InfoTitle from "./InfoTitle"
import useFetch from "../../hooks/useFetch";
const InfoTitleList = ({ returnedData }) => {

    console.log(returnedData.results.length);
    return (
        <View style={styles.container}>
           
            <FlatList 
                data={returnedData.results}
                ItemSeparatorComponent={<View style={{ width: 10 }} />}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <InfoTitle item={item} />
                )}
            />
        </View>
    )
}

export default InfoTitleList
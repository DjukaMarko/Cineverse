import { FlatList, Text, View } from "react-native"
import CategoryType from "./category/CategoryType"
import styles from "./Categories.style"
import { useState } from "react"
import useFetch from "../../hooks/useFetch"
import CategoryList from "./category/CategoryList"

const Categories = () => {

    const [selectedItem, setSelectedItem] = useState("Popular");
    const categories = ["Popular", "Adventure", "Action", "Horror", "Drama", "Thriller", "Fantasy", "Sci-Fi", "Western", "War"]


    const RenderItems = ({ item }) => {
        const isSelected = item === selectedItem ? true: false;
        return (
            <CategoryType onPress={() => setSelectedItem(item)} item={item} isSelected={isSelected} />
        )
    }
    const ItemSeparator = () => <View style={{ width: 10 }} />;
    return (
        <>
            <View style={styles.container}>
                <FlatList
                    data={categories}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    ItemSeparatorComponent={ItemSeparator}
                    renderItem={({item}) => (
                        <RenderItems item={item} />
                    )}
                    keyExtractor={item => item}
                />
            </View>
            <CategoryList id={1} title={selectedItem === "Popular" ? "Hot Today" : selectedItem} selectedItem={selectedItem}/>
            <CategoryList id={2} title={"Top Rated Movies"} selectedItem={selectedItem} />
            <CategoryList id={3} title={"Top Rated TV Shows"} selectedItem={selectedItem}/>
            <CategoryList id={4} title={"Upcoming Movies & TV Shows"} selectedItem={selectedItem}/>
        
        </>
    )


}


export default Categories
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native"
import styles from "./CategoryList.style"
import { fire } from "../../../constants"
import SkeletonLoader from "../../reusable/loader/SkeletonLoader"
import InfoTitle from "../../reusable/InfoTitle"
import useFetch from "../../../hooks/useFetch"
import { useEffect, useState } from "react"
import axios from "axios"
import InfoTitleList from "../../reusable/InfoTitleList"


const CategoryList = ({ title, selectedItem, id }) => {
    let query = "titles";
    let params = "";
    switch(title) {
        case 'Top Rated Movies':
            params = {limit: '10', list: 'top_rated_250', page: "1"};
            break;
        case 'Top Rated TV Shows': 
            params = {limit: '10', list: 'top_rated_series_250', page: "1"};
            break;
        case 'Upcoming Movies & TV Shows':
            query = "titles/x/upcoming";
            params = {info: 'base_info', page: "1"};
            break;
        default:
            params = {
                startYear: '2018',
                info: 'base_info',
                limit: '10',
                sort: 'year.decr',
                list: 'most_pop_movies', 
                page: "1"
            };
            selectedItem !== "Popular" && (params.genre = selectedItem);
            break;
    }
    
    const {returnedData, isLoading, error, reFetch} = useFetch('https://moviesdatabase.p.rapidapi.com', query, params, 'moviesdatabase.p.rapidapi.com');


    return (
        <View style={styles.container}>
            <View style={styles.hotToday}>
                <View style={styles.innerHotToday}>
                    {title === 'Hot Today' && (<Image 
                        style={styles.image}
                        source={fire}
                    />)}
                    <Text style={styles.hotText}>{id === 1 ? `Popular ${title} Movies` : title}</Text>
                </View>
                <TouchableOpacity><Text style={styles.btnText}>View All</Text></TouchableOpacity>
            </View>
            {isLoading ? <SkeletonLoader /> : <InfoTitleList returnedData={returnedData} />}
        </View>
    )
}

export default CategoryList
import { useLayoutEffect } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native"
// import MealItem from "../components/MealItem";
import { CATEGORIES, OFFERS } from "../data/dummy-data";
// import CategoryGridTitle from '../components/CategoryGridTitle';    
// import offerItem from '../components/OfferItem';
import OfferItem from "../components/OfferItem";
import ServiceGridTitle from "../components/ServiceGridTitle";


function ServicesScreen({ route, navigation }){

    const catId = route.params.categoryId; 
    const displayedOffers = OFFERS.filter((offerItem) => {
        return offerItem.categoryIds.indexOf(catId) >= 0;
    });

    // console.log(displayedOffers);

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find(
            (category) => category.id === catId
        ).title;
        navigation.setOptions({
            title: categoryTitle,
        });
    },[catId, navigation])

    function renderOfferItem(itemData) {
        const item = itemData.item;
        console.log(item)
        const offerItemProps = {
            id: item.id,
            categoryIds: item.categoryIds, 
            companyName: item.companyName, 
            image: item.image, 
            simpleText: item.simpleText, 
            details: item.details, 
            aboutCompany: item.aboutCompany
        }
        return <OfferItem {...offerItemProps}/>
    }
    // console.log(offerItemProps)


    return (
        <View style={styles.continer}>
            <FlatList 
                data={displayedOffers} 
                keyExtractor={(item) => {item.id}} renderItem={renderOfferItem} 
             />
        </View>
    );
    return <Text>''</Text>

}

export default ServicesScreen;

const styles = StyleSheet.create({
    continer: {
        flex: 1,
        padding: 16,
    },
});
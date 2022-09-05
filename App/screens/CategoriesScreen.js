import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import { StyleSheet, View, Text, Image, ImageBackground, SafeAreaView, TouchableHighlight } from "react-native";
import CategoryGridTitle from '../components/CategoryGridTitle';

function CategoriesScreen({navigation}) {

    function renderCategoryItem(itemData) {
        function pressHandler() {
            // navigate function has 2 parameters, ('name of the screen',date to be passed) in this case the data is in the itemData
            navigation.navigate('Service', {
                categoryId: itemData.item.id,
            });
        }
        return (
            <CategoryGridTitle 
                title={itemData.item.title} 
                icon={itemData.item.icon} 
                onPress={pressHandler} 
            />
        );

    }
 
    return (
        <FlatList 
            data={CATEGORIES} 
            keyExtractor={(item) => item.id } 
            renderItem = {renderCategoryItem}
            numColumns={2}
        />
    );

}

export default CategoriesScreen;
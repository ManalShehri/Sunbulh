import { FlatList } from "react-native";
import { OFFERS } from "../data/dummy-data";
// import CategoryGridTitle from '../components/CategoryGridTitle';
import ServiceGridTitle from "../components/ServiceGridTitle";


function ServicesScreen({navigation}){

    function renderCategoryItem(itemData) {
        function pressHandler() {
            // navigate function has 2 parameters, ('name of the screen',date to be passed) in this case the data is in the itemData
            navigation.navigate('Offer', {
                // categoryId: itemData.item.id,
            });
        }
        return (
            <ServiceGridTitle 
                title={itemData.item.companyName} 
                image={itemData.item.image}
                simpleText={itemData.item.simpleText}
                onPress={pressHandler} 
            />
        );

    }

    return (
        <FlatList 
            data={OFFERS} 
            keyExtractor={(item) => item.id } 
            renderItem = {renderCategoryItem}
            numColumns={1}
        />
    );
}

export default ServicesScreen;
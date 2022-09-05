import { useLayoutEffect } from "react";
import { OFFERS } from "../data/dummy-data";
// import IconButton from "../components/IconButton";

// screens and components
// import MealDetails from "../components/MealDetails";
// import Subtitle from "../components/MealDetail/Subtitle";
// import List from "../components/MealDetail/List";


import { StyleSheet, View, Text, Button, Image, Separator, SafeAreaView, Alert, TouchableHighlight, FlatList, ScrollView } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Colors from "../constants/colors";

function OfferScreen({ route, navigation }) {
    const offerID = route.params.offerId;
    console.log(offerID);

    const selectedOffer = OFFERS.find((offer) => offer.id = offerID);

    // useLayoutEffect(() => {
    //     navigation.setOptions({
    //         headerRight: () => {
    //             return <IconButton onPress={headerButtonPressHandler} icon='star' color= 'white' />
    //         }
    //     })

    // }, []);
    function scanHandler(){
        console.log('Im pressed');
        navigation.navigate('Scan');
    }


    return (
        <ScrollView style={styles.rootContainer}>
            <Image source={{uri: selectedOffer.image}} style={styles.image}/>
            <Text style={styles.title}> {selectedOffer.companyName}</Text>
            <View style={[styles.details]}>
                <Text style={[styles.detailItem]}>{selectedOffer.simpleText}</Text>
                <Text style={[styles.detailItem]}>{selectedOffer.details}</Text>
                <Text style={[styles.detailItem]}>{selectedOffer.aboutCompany}</Text>
                <View style={styles.buttonContainer}>
                    <PrimaryButton buttonText="Scan" onPress={scanHandler}/>
                </View>
            </View>      
        </ScrollView>
    );

};

export default OfferScreen;

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32,
    },
    image: {
        width: '100%',
        height: 350,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white',
    },
    detailText: {
        color: 'white',
    },
    listOuterContainer:{
        alignItems: 'center',
    },
    listContainer: {
        width: '80%',
    },
    buttonContainer: {
        paddingHorizontal: 50,
        paddingVertical: 20,
    },

});
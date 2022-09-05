import { StyleSheet, View, Pressable, Image, Text, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";

function OfferItem({ id, companyName, image, simpleText, details, onPress }){
    const navigation = useNavigation();

    function selectOfferItemHandler(){
        navigation.navigate('Offer', {
                offerId : id,
            });
    };

    
    return (
        // <Text>HH</Text>
        <View style={styles.mealItem}>
            <Pressable 
                android_ripple={{color: '#ccc'}}
                style={({ pressed }) => pressed ? styles.buttonPressed : null}
                onPress={selectOfferItemHandler}
            >
                <View style={styles.innerContainer}>
                    <View>
                        <Image source={{uri: image}} style={styles.image}/>
                        <Text style={styles.title}>
                            {companyName}
                        </Text>
                    </View>
                    <View style={[styles.details]}>
                        <Text style={[styles.detailItem]}>{simpleText}</Text>
                    </View>
                </View>
                
            </Pressable>  
        </View>
    );
};

export default OfferItem;

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: Platform.OS === 'android'? 'hidden' : 'visible',
        elevation: 4,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.30,
        shadowOffset: {width: 0, height: 2},
    },
    buttonPressed: {
        opacity: 0.5,
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8,
    },
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12,
    },
});
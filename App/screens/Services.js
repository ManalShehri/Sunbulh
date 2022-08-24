import { StyleSheet, View, Text, Image, ImageBackground, SafeAreaView, TouchableHighlight } from "react-native";
import Colors from "../constants/colors";

function Services({handleOffer}) {
    // Add the text inputs & buttons into components 
    // sections of services as buttons
    function handleOfferClicking()
    {
        console.log('offer clicked'); 
        handleOffer(true);
    }


    return (
        <SafeAreaView style={styles.rootScreen}>
        {/* <View style={styles.rootContiner}> */}

        <View style={styles.screenContainer}>
            <View style={styles.screenTitleContainer}>
                <Text style={styles.screenTitle}>Services</Text>
            </View>
            <TouchableHighlight style={styles.cardContainer} onPress={handleOfferClicking}>
                <ImageBackground source={require('../assets/images/image1.jpg')} resizeMode="cover" style={styles.image}>
                    <View style={styles.cardText}>
                        <Text style={styles.titleText}>M Salon</Text>
                        <Text style={styles.contentText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry</Text>
                    </View>
                </ImageBackground>
            </TouchableHighlight>
            <View style={styles.cardContainer}>
                <ImageBackground source={require('../assets/images/image2.jpg')} resizeMode="cover" style={styles.image}>
                    <View style={styles.cardText}>
                        <Text style={styles.titleText}>Restorant 2</Text>
                        <Text style={styles.contentText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry</Text>
                    </View>
                </ImageBackground>
            </View>
            <View style={styles.cardContainer}>
                <ImageBackground source={require('../assets/images/image1.jpg')} resizeMode="cover" style={styles.image}>
                    <View style={styles.cardText}>
                        <Text style={styles.titleText}>N Salon</Text>
                        <Text style={styles.contentText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry</Text>
                    </View>
                </ImageBackground>
            </View>
            <View style={styles.cardContainer}>
                <ImageBackground source={require('../assets/images/image2.jpg')} resizeMode="cover" style={styles.image}>
                    <View style={styles.cardText}>
                        <Text style={styles.titleText}>Restorant 4</Text>
                        <Text style={styles.contentText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry</Text>
                    </View>
                </ImageBackground>
            </View> 
        {/* </View>   */}
        </View>
    </SafeAreaView>       
    );};

export default Services;

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1,
      },
    screenContainer: {
        flexDirection: "column",
        alignItems: 'center',
        justifyContent:'center',
   },
   screenTitleContainer: {
        // backgroundColor: 'red',
        height: 50,
        marginBottom: 10,
        textAlign: 'right',
        right: 0,
   },
   screenTitle: {
        // color: 'white',
        fontSize: 32,
        fontWeight: 'bold',
        color: Colors.primaryBlue800,
        // textAlign: 'center',
        borderWidth: 2,
        borderColor: 'white',
        padding: 8,
   },
    cardContainer: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        height: 150,
        // backgroundColor: 'white',
        marginBottom: 14,
        // alignItems: 'flex-end'
        // justifyContent: 'flex-end',
        // justifyContent: 'flex-end',
    },
    cardText: {
        // backgroundColor: 'red',
        // width: 200,
        // textAlign: 'right',
        // justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'flex-start', //importatnt
        flex: 1,
        opacity: 0.88,

   },
    image: {
        // width: '100%',
        // height: '100%',
        overflow: 'hidden',
        // opacity: 0.85,
        flex: 1,
        // justifyContent: "center",
        flexDirection: 'column',

        // alignContent: 'space-between',
        alignItems: 'center',
        borderRadius: 10,
        opacity: 0.9,

      },
      titleText: {
        color: "#ffffff",
        fontSize: 25,
        fontWeight: "bold",
        backgroundColor: 'black',
        opacity: 0.90,
        marginVertical: 8,
        borderRadius: 10,
        borderColor: '#000000',
        borderWidth: 1,
        overflow: 'hidden',
        marginTop: 40,
        padding: 6,
        marginLeft: 4,
      },
      contentText: {
        color: '#ffffff',
        padding: 6,
        fontSize: 12,
        lineHeight: 15,
        fontWeight: "bold",
        // textAlign: "center",
        backgroundColor: "#000000",
        overflow: 'hidden',
        borderRadius: 2,
        borderColor: '#000000',
        borderWidth: 1,
        opacity: 0.65,
        marginTop: 10,
      },

});
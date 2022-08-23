import { StyleSheet, View, Text, Image, ImageBackground } from "react-native";

function Services() {
    return (
        <View style={styles.screenContainer}>
            <View style={styles.screenTitleContainer}>
                <Text style={styles.screenTitle}>Services</Text>
            </View>
            <View style={styles.cardContainer}>
                <ImageBackground source={require('../assets/images/image1.jpg')} resizeMode="cover" style={styles.image}>
                    <View style={styles.cardText}>
                        <Text style={styles.titleText}>Inside 1</Text>
                        <Text style={styles.contentText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry</Text>
                    </View>
                </ImageBackground>
            </View>
            <View style={styles.cardContainer}>
                <ImageBackground source={require('../assets/images/image1.jpg')} resizeMode="cover" style={styles.image}>
                    <View style={styles.cardText}>
                        <Text style={styles.titleText}>Inside 2</Text>
                        <Text style={styles.contentText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry</Text>
                    </View>
                </ImageBackground>
            </View>
            <View style={styles.cardContainer}>
                <ImageBackground source={require('../assets/images/image1.jpg')} resizeMode="cover" style={styles.image}>
                    <View style={styles.cardText}>
                        <Text style={styles.titleText}>Inside 3</Text>
                        <Text style={styles.contentText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry</Text>
                    </View>
                </ImageBackground>
            </View>
            <View style={styles.cardContainer}>
                <ImageBackground source={require('../assets/images/image1.jpg')} resizeMode="cover" style={styles.image}>
                    <View style={styles.cardText}>
                        <Text style={styles.titleText}>Inside 4</Text>
                        <Text style={styles.contentText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry</Text>
                    </View>
                </ImageBackground>
            </View> 
        </View>         
    );};

export default Services;

const styles = StyleSheet.create({
    screenContainer: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: 'white',
   },
   screenTitleContainer: {
        // backgroundColor: 'red',
        height: 50,
        marginBottom: 10,
        textAlign: 'right',
        right: 0,
   },
   screenTitle: {
        color: 'white',
        fontSize: 32,
        fontWeight: 'bold',
        color: '#2F4F4F',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: 'white',
        padding: 8,
   },
    cardContainer: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        height: 150,
        width: '90%',
        backgroundColor: 'white',
        marginBottom: 12,
    },
    cardText: {
        // backgroundColor: 'red',
        // width: 200,
        textAlign: 'right',
        justifyContent: 'center',
        flex: 1,
   },
    image: {
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        opacity: 0.75,
        flex: 1,
        justifyContent: "center",
        borderRadius: 10,

      },
      titleText: {
        color: "white",
        fontSize: 25,
        // lineHeight: 40,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000",
        opacity: 0.75,
        // marginHorizontal: 8,
        marginVertical: 8,
        width: 100,
        borderRadius: 10,
        borderColor: '#000000',
        borderWidth: 1,
        // margin: 8,
        height: 40,
        overflow: 'hidden',
        alignItems: 'center',

      },
      contentText: {
        backgroundColor: 'red',
        color: '#F0F8FF',
        padding: 6,
        color: "white",
        fontSize: 12,
        lineHeight: 15,
        fontWeight: "bold",
        // textAlign: "center",
        backgroundColor: "#000000",
        opacity: 0.70,
      },

});
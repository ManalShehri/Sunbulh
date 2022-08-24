import { StyleSheet, View, Text, Button, Image, Separator, SafeAreaView, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Colors from "../constants/colors";

function Offer() {
    return (
        <SafeAreaView style={styles.screenContainer}>
            <View style={styles.imageContainer}>
                <Image 
                    style={styles.image}
                    source={require('../assets/images/image1.jpg')}
                />
            </View>
            <View style={styles.screenTitleContainer}>
                <Text style={styles.screenTitle}>The offer</Text>
            </View>
            <View>
                <Text style={styles.contentText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry, Lorem Ipsum is simply dummy text of the printing and typesetting industry, Lorem Ipsum is simply dummy text of the printing and typesetting industry</Text>
                <Text style={styles.contentText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry, Lorem Ipsum is simply dummy text of the printing and typesetting industry, Lorem Ipsum is simply dummy text of the printing and typesetting industry</Text>
            </View>
            <View style={styles.buttonContainer}>
                <PrimaryButton buttonText='Scan'/>
            </View>
        </SafeAreaView>
    );
};

export default Offer;

const styles = StyleSheet.create({
        screenContainer: {
        // backgroundColor: 'red',
        width: '100%',
        flex: 1,
        alignItems: 'center',
        // justifyContent:'center',
        marginHorizontal: 16,

   },

    imageContainer: {},
    image: {},
    buttonContainer: {
        justifyContent: "center",
        width: 250,
        alignItems: 'center',
        flex: 1,
        marginTop: 20,
        // bottom: 2,
    },
    buttonStyle: {
        // backgroundColor: 'red',
    },
    screenTitleContainer: {
        // backgroundColor: 'red',
        height: 50,
        marginBottom: 10,
        textAlign: 'right',
        // right: 0,
   },
    screenTitle: {
        fontSize: 32,
        fontWeight: 'bold',
        // color: '#2F4F4F',
        color: Colors.primaryBlue800,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: 'white',
        padding: 8,
   },
   contentText: {
    // color: '#F0F8FF',
    padding: 6,
    // color: "white",
    fontSize: 12,
    // lineHeight: 15,
    fontWeight: "bold",
    marginBottom: 3,
    // textAlign: "center",
    // backgroundColor: "#000000",
    // opacity: 0.70,
  },
});
import { StyleSheet, View, Pressable, Text, Platform, ImageBackground } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 

function ServiceGridTitle({title, image, simpleText, onPress}) {
    return (
        <View style={styles.gridItem}>
            <Pressable 
                android_ripple={{color: '#ccc'}} 
                style={({ pressed }) => [
                    styles.button,
                    pressed ? styles.buttonPressed : null]}
                onPress={onPress}
            >
                <ImageBackground source={{ uri: image }} resizeMode="cover" style={styles.image}>
                     <View style={[styles.innerContainer]}>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.simpleText}>{simpleText}</Text>

                     </View>
                 </ImageBackground>
            </Pressable>
        </View>
    )
};

export default ServiceGridTitle;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 2},
        overflow: Platform.OS === 'android'? 'hidden' : 'visible',
    },
    button: {
        flex: 1,
    },
    buttonPressed: {
        opacity: 0.5,
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        borderRadius: 8,
        justifyContent: 'space-between',
        alignItems: 'baseline',
    },
    title: {
        fontWeight: 'bold',
        color: "white",
        lineHeight: 30,
        fontWeight: "bold",
        backgroundColor: "#000000c0",
        color: "#ffffff",
        fontSize: 20,
        fontWeight: "bold",
        backgroundColor: 'black',
        opacity: 0.95,
        marginVertical: 8,
        borderRadius: 10,
        borderColor: '#000000',
        borderWidth: 1,
        overflow: 'hidden',
        paddingHorizontal: 8,
        marginLeft: 4,
    },
    simpleText: {
        color: "white",
        backgroundColor: "#000000c0",
        color: "#ffffff",
        fontSize: 12,
        opacity: 0.90,
        marginVertical: 8,
        borderRadius: 10,
        borderColor: '#000000',
        borderWidth: 1,
        overflow: 'hidden',
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginLeft: 4,
    },
    image: {
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        flex: 1,
        flexDirection: 'column',
        // alignItems: 'center',
        borderRadius: 10,
        opacity: 0.85,
      },
});
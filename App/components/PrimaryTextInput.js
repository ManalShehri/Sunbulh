import { StyleSheet, View, TextInput, Text } from "react-native";
import Colors from "../constants/colors";

function PrimaryTextInput({placHolderText, isPass, handleInputs}){
    return (
        <View style={styles.inputView}>
            <TextInput
            style={styles.TextInput}
            placeholder={placHolderText}
            placeholderTextColor="#2a5b89"
            secureTextEntry= {isPass}
            onChangeText={(inputValue) => handleInputs(inputValue)}
            />
        </View>
    );
};

export default PrimaryTextInput;

const styles = StyleSheet.create({
    inputView: {
        backgroundColor: Colors.primaryBlue200,
        borderRadius: 8,
        width: "100%",
        height: 45,
        marginBottom: 20,
    }, 
    TextInput: {
        height: 40,
        flex: 1,
        padding: 10,
        marginLeft: 10,
    },
});
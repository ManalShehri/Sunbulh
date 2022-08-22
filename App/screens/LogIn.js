import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";
import PrimaryTextInput from "../components/PrimaryTextInput";


function LogIn() {
    // const setInputValue
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    console.log('Email:',email,'Pass:',password);

    // ----- TODO -----:
    // 1. Check inputs (email & pass)
    // 2. If correct => move to the services
    // 3. If wrong => show error messages
    // 4. Ability to change the password 

    return (
        <>
            <View style={styles.imageContainer}>
                <Image 
                    style={styles.image}
                    source={require('../assets/images/Sunbulh-logo.jpg')}
                />
            </View>
            <View style={styles.inputContainer}>
                <PrimaryTextInput placHolderText = 'Email' handleInputs={(inputVal) => setEmail(inputVal)}/>
                <PrimaryTextInput placHolderText = 'Passwors' isPass={true} handleInputs={(inputVal) => setPassword(inputVal)}/>
                <PrimaryButton buttonText='LOGIN'/>
                <TouchableOpacity style={styles.forgetBtn}>
                    <Text style={styles.forgetText}>Forgot Password?</Text>
                </TouchableOpacity>  
            </View>
        </>
    );
};

export default LogIn;

const styles = StyleSheet.create({
    imageContainer: {
        width: 300,
        height: 200,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    inputContainer: {
        width: 250,
    },
    forgetBtn: {
        alignItems: "center",
        paddingTop: 8,
    },
    forgetText: {
        height: 30,
        marginBottom: 30,
    },
});
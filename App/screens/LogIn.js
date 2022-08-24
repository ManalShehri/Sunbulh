import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, SafeAreaView } from "react-native";
import { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";
import PrimaryTextInput from "../components/PrimaryTextInput";
import Colors from "../constants/colors";
import Services from "./Services";


function LogIn({handleLogin}) {
    // const setInputValue
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showErrorMsg, setShowErrorMsg] = useState(false);

    let dbEmail = 'M';
    let dbPassword = '1';

    const loginCheck = () => {
        if (email == dbEmail && password == dbPassword)
        {
            console.log('Logged in');
             handleLogin(true)
        //    { <Services /> }
        }
        else 
        {
            console.log('please check the inputs')
            setShowErrorMsg(true);
        }
    }

    // ----- TODO -----:
    // 1. Check inputs (email & pass)
    // 2. If correct => move to the services
    // 3. If wrong => show error messages
    // 4. Ability to change the password 

    return (
        <SafeAreaView style={styles.rootScreen}>
        <View style={styles.rootContiner}>
            <View style={styles.imageContainer}>
                <Image 
                    style={styles.image}
                    source={require('../assets/images/Sunbulh-logo.jpg')}
                />
            </View>
            <View style={styles.inputContainer}>
                <PrimaryTextInput placHolderText = 'Email' handleInputs={(inputVal) => setEmail(inputVal)}/>
                <PrimaryTextInput placHolderText = 'Passwors' isPass={true} handleInputs={(inputVal) => setPassword(inputVal)}/>
                <PrimaryButton buttonText='LOGIN' onPress={loginCheck}/>
                <TouchableOpacity style={styles.forgetBtn}>
                    <Text style={styles.forgetText}>Forgot Password?</Text>
                </TouchableOpacity>  
                {showErrorMsg ? <Text style={styles.errorMsg}>Wrong Email or Password!</Text> : <></>}
                
            </View>
            </View>
    </SafeAreaView>
    );
};

export default LogIn;

const styles = StyleSheet.create({
    // mainContainer: {
    //     backgroundColor: 'red',
    //     flex: 1,
    //     height: '100%',
    //     width:'100%',
    // },
    rootScreen: {
        flex: 1,
        backgroundColor: Colors.primaryBlue500,
      },
      rootContiner: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
      },
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
    errorMsg: {
        color: '#DC143C',
        textAlign: "center",
    },
});
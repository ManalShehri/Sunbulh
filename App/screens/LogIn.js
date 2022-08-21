import { StyleSheet, Text, Image, View, StatusBar, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";


function LogIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (

        <View style={styles.container}>
            <Image style={styles.image} source={require("../assets/images/Sunbulh-logo.jpg")} />
     
         <StatusBar style="auto" />
          
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Email..."
              placeholderTextColor="#2a5b89"
              onChangeText={(email) => setEmail(email)}
            />
          </View>
      
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Password..."
              placeholderTextColor="#2a5b89"
              secureTextEntry={true}
              onChangeText={(password) => setPassword(password)}
            />
          </View>
      
          <TouchableOpacity>
            <Text style={styles.forgot_button}>Forgot Password?</Text>
          </TouchableOpacity>
     
          <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginText}>LOGIN</Text>
          </TouchableOpacity>  
          
        
        </View>
      );
};

export default LogIn;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#4788c8",
        alignItems: "center",
        justifyContent: "center",
      },
      // imageContainer: {
      //   width: 150,
      //   height: 150,
      // },
    image: {
        marginBottom: 40,
        width: 250,
        height: 150,
      },
     
      inputView: {
        backgroundColor: "#c4d9ed",
        borderRadius: 15,
        width: "75%",
        height: 45,
        marginBottom: 20,
        // alignItems: "left",
      }, 
   
    TextInput: {
        height: 40,
        flex: 1,
        padding: 10,
        marginLeft: 20,
      },
     
      forgot_button: {
        height: 30,
        marginBottom: 30,
      },
    loginBtn: {
        width: "75%",
        borderRadius: 15,
        height: 45,
        alignItems: "center",
        justifyContent: "center",
        // marginTop: 40,
        backgroundColor: "#244e75",
      },
      loginText: {
        color: '#ffffff'
    
      },
});

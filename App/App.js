import { StatusBar, SafeAreaView, StyleSheet, View } from "react-native";
import { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Services from "./screens/Services";
import LogIn from "./screens/LogIn";
import Offer from "./screens/Offer";
import Colors from "./constants/colors";
import Scan from "./screens/Scan";

const Stack = createNativeStackNavigator();

export default function App() {

  // ----- TODO -----
  // Add the text inputs & buttons into components 
  // Add the colors into separate sheet
  // Build a base style for all the pages 
  // Functionality of the buttons 
  // Animation of the buttons & transiction between pages
  // Build the DB
  // Connect to the DB
  // Barcode 
  // Lanch 

  // ----- STYLE -----: 
  // 1. Login/Logout (done)
  // 2. Forget Password 
  // 3. Services (View all, Sections)
  // 4. Offers (View offer info, Search for, Filter, Scan, add to fav)
  // 5. Notification
  // 6. Google map
  // 7. Points System
  // 8. Profile (view, change pass & name, view history of offers, view fav, delete from fav, add family) 
  // 9. Contact us 

  // ----- FUNCTIONS -----: 
  // 1. Login/Logout
  // 2. Forget Password
  // 3. Services (View all, Sections)
  // 4. Offers (View offer info, Search for, Filter, Scan, add to fav)
  // 5. Notification
  // 6. Google map
  // 7. Points System
  // 8. Profile (view, change pass & name, view history of offers, view fav, delete from fav, add family) 
  // 9. Contact us 

  return (
    <>
    <StatusBar style='light' />
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Login" component={LogIn} /> */}
        <Stack.Screen name="Services" component={Services} />
        <Stack.Screen name="Offer" component={Offer} />
        <Stack.Screen name="Scan" component={Scan} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  )

}

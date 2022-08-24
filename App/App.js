import { StatusBar, SafeAreaView, StyleSheet, View } from "react-native";
import { useState } from "react";

import Services from "./screens/Services";
import LogIn from "./screens/LogIn";
import Offer from "./screens/Offer";
import Colors from "./constants/colors";
import Scan from "./screens/Scan";

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

  const [isLoggedin, setIsLoggedin] = useState(false);
  const [showOffer, setshowOffer] = useState(false);
  const [showScan, setShowScan] = useState(false);



  const handleLogin = (val) => {
    console.log(val);
    setIsLoggedin(val);
    // setCount(current => current + num);
  };

  const handleOffer = (val) => {
    console.log(val);
    setshowOffer(val);
    // setCount(current => current + num);
  };

  const handleScan = (val) => {
    console.log(val);
    setShowScan(val);
    // setCount(current => current + num);
  };




  let screen = <LogIn handleLogin={handleLogin}/>;
  
  // let screen = <Services />;
  // let screen = <Offer />;
  if (isLoggedin)
  {
    screen = <Services handleOffer={handleOffer}/>;
    // console.log('isLoggedin',isLoggedin)
  } 

  if (showOffer)
  {
    screen = <Offer handleScan={handleScan}/>;
    // console.log('isLoggedin',isLoggedin)
  } 
  
  if (showScan)
  {
    screen = <Scan/>;
    // console.log('isLoggedin',isLoggedin)
  } 
  return screen; 

    // <SafeAreaView style={styles.rootScreen}>
      // <View style={styles.rootContiner}>
      <></>
        {screen}

        // <LogIn handleLogin={handleLogin} />
        // <Services />
        // <Offer />



        // <StatusBar style="auto" />
      // </View>
    // </SafeAreaView>
  // );
};

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: Colors.primaryBlue500,
  },
  rootContiner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "center",
  },
});
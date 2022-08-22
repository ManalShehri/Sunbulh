import { Text, SafeAreaView, StyleSheet } from "react-native";
import Services from "./screens/Services";
import LogIn from "./screens/LogIn";
import Offer from "./screens/Offer";
import Colors from "./constants/colors";

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

  let screen = <LogIn />;
  // let screen = <Services />;
  // let screen = <Offer />;

  return (
    <SafeAreaView style={styles.rootScreen}>
      {screen}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: Colors.primaryBlue500,
  },
});
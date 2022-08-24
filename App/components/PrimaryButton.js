import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Colors from "../constants/colors";

function PrimaryButton({buttonText, onPress}) {
    return (
        <TouchableOpacity style={styles.btnStyle} onPress={onPress}>
            <Text style={styles.btnText}>{buttonText}</Text>
        </TouchableOpacity>
    );
};

export default PrimaryButton;

const styles = StyleSheet.create({
    btnStyle: {
        width: "100%",
        borderRadius: 15,
        height: 45,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.primaryBlue800,
    },
    btnText: {
        color: '#ffffff',
        fontWeight: "bold",
        fontSize: 16,
    },
});
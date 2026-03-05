import { StyleSheet } from 'react-native';
import { Dimensions } from "react-native";

const screenHeight = Dimensions.get("window").height;

const Style = StyleSheet.create({
    div_banner : {
        padding: 0,
        margin: 0,
    },
    banner: {
        width: "100%",
        height: screenHeight * 0.25
    },
    titulo: {
        fontSize: 25,
        fontWeight: "600",
        color: "#fff",
        textAlign: "center"
    }
})

export default Style;
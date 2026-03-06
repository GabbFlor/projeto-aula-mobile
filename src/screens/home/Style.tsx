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

    div_texto: {
        display: "flex",
        flexDirection: "column",
        gap: 15,
        marginBottom: 50
    },
    titulo: {
        fontSize: 25,
        fontWeight: "600",
        color: "#fff",
        textAlign: "center"
    },
    texto: {
        fontSize: 18,
        fontWeight: 400,
        color: "#fff",
        textAlign: "justify"
    },

    div_map: {
        textAlign: "center",
        height: 300,
        width: 300,
        marginTop: 20,
        borderRadius: 10,
        overflow: "hidden",

        borderColor: "#e046be",
        borderWidth: 2,
    },
    map: {
        flex: 1,
        width: 300,
        height: 300,
        overflow: "hidden",
    }
})

export default Style;
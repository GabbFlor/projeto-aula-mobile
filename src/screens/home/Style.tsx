import { StyleSheet } from 'react-native';
import { Dimensions } from "react-native";
import spacing from '../../styles/Spacing';

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

const Style = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: "#36134f"
    },
    div_banner : {
        padding: 0,
        margin: 0,
        marginBottom: 15
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
    div_map: {
        textAlign: "center",
        height: 300,
        width: 300,
        // marginTop: 20,
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
    },
    div_cards: {
        marginBottom: 50
    },
    cardView: {
        marginTop: 20,
    },
    card: {
        // subtraindo o padding da direita e esquerda da tela q eu coloquei no globalStyle
        width: screenWidth - (spacing.md * 2)
    }
})

export default Style;
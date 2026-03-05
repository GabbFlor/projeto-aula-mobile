import { StyleSheet, View, Text } from "react-native";

export default function Test() {
    return (
        <View>
            <Text style={styles.texto}>TESTANDOOO</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    texto: {
        fontSize: 20,
        color: "#ff5e62",

    }
})
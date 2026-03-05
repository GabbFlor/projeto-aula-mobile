import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import GlobalStyle from "../../styles/GlobalStyle";

export default function Home() {
    return (
        <SafeAreaView style={GlobalStyle.main}>
            <ScrollView>
                <Text>OI</Text>
            </ScrollView>
        </SafeAreaView>
    )
}
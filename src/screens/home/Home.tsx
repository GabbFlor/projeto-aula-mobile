import { View, Text, ScrollView, Image } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import GlobalStyle from "../../styles/GlobalStyle";
import Style from "./Style";

export default function Home() {
    return (
        <SafeAreaView style={{ flex: 1 }} edges={['left','right','bottom']}>
            {/* imagem do banner aqui */}
            <View style={Style.div_banner}>
                <Image 
                    source={require("../../../assets/banner-top.png")} 
                    resizeMode="cover"
                    style={Style.banner}
                />
            </View>

            <View style={GlobalStyle.main}>
                <ScrollView>
                    <Text style={Style.titulo}>🌟 Sobre nós 🌟</Text>

                    {/* resto do conteúdo */}
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}
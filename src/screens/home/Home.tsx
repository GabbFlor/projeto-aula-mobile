import { View, Text, ScrollView, Image } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import GlobalStyle from "../../styles/GlobalStyle";
import Style from "./Style";
import MapView, { Marker } from "react-native-maps";

export default function Home() {
    return (
        <SafeAreaView style={{ flex: 1 }} edges={['left','right','bottom']}>
            <ScrollView>
                <View style={Style.div_banner}>
                    <Image 
                        source={require("../../../assets/banner-top.png")} 
                        resizeMode="cover"
                        style={Style.banner}
                    />
                </View>
                
                <View style={GlobalStyle.main}>
                    <View style={Style.div_texto}>
                        <Text style={Style.titulo}>🌟 Sobre nós 🌟</Text>

                        <Text style={Style.texto}>
                            A Loja do Florindo surgiu da paixão por tecnologia e montagem de 
                            computadores, que começou como um hobby ajudando amigos e familiares. 
                            Com o tempo, percebemos a dificuldade das pessoas em encontrar peças 
                            de qualidade e boas recomendações, e criamos a loja para oferecer 
                            componentes confiáveis, preços justos e ajudar cada cliente a montar 
                            ou melhorar seu PC. 🚀
                        </Text>
                    </View>

                    <View>
                        <Text style={Style.titulo}>📌 Onde estamos? 📌</Text>

                        <View style={Style.div_map}>
                            <MapView
                                style={Style.map}
                                initialRegion={{
                                    latitude: -23.55052,
                                    longitude: -46.633308,
                                    latitudeDelta: 0.01,
                                    longitudeDelta: 0.01
                                }}
                            >
                                <Marker
                                    coordinate={{
                                        latitude: -23.55052,
                                        longitude: -46.633308
                                    }}
                                    title="Loja do Florindo"
                                    description="Aqui fica nossa loja!"
                                />
                            </MapView>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
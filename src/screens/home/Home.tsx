import { View, Text, ScrollView, Image, FlatList } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import GlobalStyle from "../../styles/GlobalStyle";
import Style from "./Style";
import MapView, { Marker } from "react-native-maps";

export default function Home() {
    return (
        <SafeAreaView style={Style.body} edges={['left','right','bottom']}>
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
                        <Text style={GlobalStyle.titulo}>🌟 Sobre nós 🌟</Text>

                        <Text style={GlobalStyle.texto}>
                            A Loja do Florindo surgiu da paixão por tecnologia e montagem de 
                            computadores, que começou como um hobby ajudando amigos e familiares. 
                            Com o tempo, percebemos a dificuldade das pessoas em encontrar peças 
                            de qualidade e boas recomendações, e criamos a loja para oferecer 
                            componentes confiáveis, preços justos e ajudar cada cliente a montar 
                            ou melhorar seu PC. 🚀
                        </Text>
                    </View>

                    <View style={Style.div_texto}>
                        <Text style={GlobalStyle.titulo}>📌 Onde estamos? 📌</Text>

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

                    <View style={Style.div_cards}>
                        <Text style={GlobalStyle.titulo}>❓ Detalhes da empresa ❓</Text>
                        <ScrollView style={Style.cardView} horizontal showsHorizontalScrollIndicator={false}>
                            <View style={[Style.card, {marginRight: 30}]}>
                                <Text style={GlobalStyle.subTitulo}>Serviços oferecidos</Text>

                                <Text style={GlobalStyle.texto}>
                                    Na Loja do Florindo, oferecemos consultoria para montar ou melhorar seu setup, 
                                    ajudando a escolher as melhores peças conforme sua necessidade e orçamento. 
                                    Também realizamos montagem, manutenção e orientações para upgrades no seu PC.
                                </Text>
                            </View>

                            <View style={[Style.card, {marginRight: 30}]}>
                                <Text style={GlobalStyle.subTitulo}>Serviços oferecidos</Text>

                                <Text style={GlobalStyle.texto}>
                                    Na Loja do Florindo, oferecemos consultoria para montar ou melhorar seu setup, 
                                    ajudando a escolher as melhores peças conforme sua necessidade e orçamento. 
                                    Também realizamos montagem, manutenção e orientações para upgrades no seu PC.
                                </Text>
                            </View>

                            <View style={Style.card}>
                                <Text style={GlobalStyle.subTitulo}>Serviços oferecidos</Text>

                                <Text style={GlobalStyle.texto}>
                                    Na Loja do Florindo, oferecemos consultoria para montar ou melhorar seu setup, 
                                    ajudando a escolher as melhores peças conforme sua necessidade e orçamento. 
                                    Também realizamos montagem, manutenção e orientações para upgrades no seu PC.
                                </Text>
                            </View>
                        </ScrollView>
                    </View>

                    <View style={Style.div_texto}>
                        <Text style={GlobalStyle.titulo}>📼 Vídeo sobre a empresa 📼</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, ScrollView, Image, FlatList } from "react-native";
import listaProdutos from '../../mocks/listaProdutos';
import ProdutoCard from '../../components/ProdutoCard';
import GlobalStyle from '../../styles/GlobalStyle';
import Style from './Syle';

export default function Produtos() {
    const produtos = listaProdutos.itens.lista;

    const handleOpenModal = () => {
        console.log("chamando função top de abrir modal.")
    }

    return (
        <SafeAreaView style={GlobalStyle.main} edges={['left', 'right', 'bottom']}>
            <Text style={[GlobalStyle.titulo, Style.pagTitle]}>{listaProdutos.itens.titulo}</Text>

            <FlatList
                data={produtos}
                renderItem={({ item }) => (
                    <ProdutoCard
                        nome={item.nome}
                        tipo={item.tipo}
                        descricao={item.descricao}
                        valor={item.valor}
                        imagem={item.imagem}
                        onClick={handleOpenModal}
                    />
                )}
                keyExtractor={(item) => item.id.toString()}
                ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
            />
        </SafeAreaView>
    )
}
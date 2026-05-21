import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, ScrollView, Image, FlatList } from "react-native";
import listaProdutos from '../../mocks/listaProdutos';
import ProdutoCard from '../../components/ProdutoCard';
import GlobalStyle from '../../styles/GlobalStyle';
import Style from './Syle';
import { useState } from 'react';
import ProdutoModal from '../../components/ProdutoModal';

interface Produto {
    id: number;
    nome: string;
    tipo: string;
    descricao: string;
    valor: number;
    imagem: any;
}

export default function Produtos() {
    const [ modal, setModal ] = useState(false);
    const [ produtoSelecionado, setProdutoSelecionado ] = useState<Produto | null>(null)
    const produtos = listaProdutos.itens.lista;

    const handleOpenModal = (id:number) => {
        const produtoEncontrado = produtos.find(item => item.id === id);

        console.log(produtoEncontrado)

        if (produtoEncontrado) {
            setProdutoSelecionado(produtoEncontrado);
            setModal(true);
        }
    }

    const handleCloseModal = () => {
        setModal(false);
        setProdutoSelecionado(null);
    }

    return (
        <SafeAreaView style={GlobalStyle.main} edges={['left', 'right', 'bottom']}>
            <ProdutoModal 
                visivel={modal} 
                onClose={handleCloseModal} 
                nome={produtoSelecionado ? produtoSelecionado.nome : ""}
                descricao={produtoSelecionado ? produtoSelecionado.descricao : ""}
                valor={produtoSelecionado ? produtoSelecionado.valor : 0}
                imagem={produtoSelecionado ? produtoSelecionado.imagem : ""}
            />

            <Text style={[GlobalStyle.titulo, Style.pagTitle]}>{listaProdutos.itens.titulo}</Text>

            <FlatList
                data={produtos}
                renderItem={({ item }) => (
                    <ProdutoCard
                        id={item.id}
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
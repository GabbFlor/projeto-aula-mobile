import { Card } from "react-native-paper";
import { ImageSourcePropType, Text, TouchableOpacity } from "react-native";
import Style from "../screens/produtos/Syle";

// interface por viadagem do typescript
interface ProdutoCardProps {
    nome: string;
    tipo: string;
    descricao: string;
    valor: number;
    imagem: ImageSourcePropType,

    // função para funcionar como callback para abrir o modal no componente pai
    onClick: () => void
}

export default function ProdutoCard({ nome, tipo, descricao, valor, imagem, onClick }:ProdutoCardProps) {
    return <Card mode="contained" style={Style.card}>
                <Card.Cover source={imagem} style={Style.cardImage}/>
                <Card.Content style={Style.cardContent}>
                    <Text style={[Style.geralText, Style.titleCard]}>{nome}</Text>
                    <Text style={[Style.geralText, Style.normalText]}>{descricao}</Text>
                    <Text style={Style.priceText}>R$ {valor.toFixed(2).replace('.', ',')} / cada</Text>

                    <TouchableOpacity style={Style.btn} onPress={onClick}>
                        <Text style={Style.btnText}>Ver mais</Text>
                    </TouchableOpacity>
                </Card.Content>
            </Card>
}
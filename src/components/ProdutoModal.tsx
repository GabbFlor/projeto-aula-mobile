import { Modal, Pressable,Text, Button, ImageSourcePropType, Image, TouchableOpacity } from "react-native";
import Style from "../screens/produtos/Syle";
import AntDesign from '@expo/vector-icons/AntDesign';

interface ProdutoModalProps {
    visivel: boolean;
    onClose: () => void;
    nome: string;
    descricao: string;
    valor: number;
    imagem: ImageSourcePropType
}

export default function ProdutoModal({ visivel, onClose, nome, descricao, valor, imagem }:ProdutoModalProps) {
    
    return (
        <Modal
            visible={visivel}
            transparent={true}
            animationType="fade"
            onRequestClose={onClose}
        >
            <Pressable style={Style.overlay} onPress={onClose}>
                {/* colocando um outro pressable pra ele não fechar quando clicar no modal mesmo */}
                <Pressable style={Style.modal} onPress={(e) => e.stopPropagation()}>
                    <Image source={imagem} style={Style.modalImage} />

                    <Text style={Style.modalTitle}>{nome}</Text>
                    <Text style={Style.modalNormalText}>{descricao}</Text>
                    <Text style={Style.modalPriceText}>R$ {valor?.toFixed(2).replace('.', ',')} / cada</Text>
                    
                    {/* Botão interno opcional só para fechar também */}
                    <TouchableOpacity onPress={onClose} style={Style.btnFecharModal}>
                        <AntDesign name="close" size={26} color="white" />
                    </TouchableOpacity>
                </Pressable>
            </Pressable>
        </Modal>
    )
}
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, ScrollView, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform } from "react-native";
import GlobalStyle from '../../styles/GlobalStyle';
import { useRef, useState } from 'react';
import { CameraType, CameraView, useCameraPermissions } from 'expo-camera';
import Style from './Style';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export default function Perfil() {
    const [facing, setFacing] = useState<CameraType>('front');
    const [permission, requestPermission] = useCameraPermissions();
    const [congelado, setCongelado] = useState(false);
    const cameraRef = useRef<CameraView>(null);
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");

    function handleToggleCameraFacing() {
        setFacing(current => (current === "back" ? "front" : "back"));
    }

    function handleTakePicture() {
        // funcao para simular o bgl de tirar foto
        if (cameraRef.current) {
            if (!congelado) {
                cameraRef.current.pausePreview();
                setCongelado(true);
            } else {
                cameraRef.current.resumePreview();
                setCongelado(false);
            }
        }
    }

    function handleSubmitForm() {
        console.log("Registrando usuário: ")
        console.log(`
            Nome: ${nome},
            Email: ${email},
            Telefone: ${telefone}
        `)
    }

    if (!permission) return (
        <SafeAreaView style={GlobalStyle.main} edges={['left', 'right', 'bottom']} />
    )

    // requisitando permissão
    if (!permission.granted) return (
        <SafeAreaView style={[GlobalStyle.main, Style.main]} edges={['left', 'right', 'bottom']}>
            <Text style={GlobalStyle.subTitulo}>É necessário a sua permissão para utilizarmos a câmera</Text>

            <TouchableOpacity onPress={requestPermission} style={Style.btn}>
                <Text style={Style.btnText}>Permitir</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )

    return (
    <SafeAreaView style={[GlobalStyle.main, { flex: 1 }]} edges={['left', 'right', 'bottom']}>
        {/* esse bgl é pra que a tela fique certa quando abrir o teclado para digitar */}
        <KeyboardAvoidingView 
            behavior={Platform.OS === 'ios' ? 'padding' : 'padding'} 
            style={Style.mainScrollView}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 60} 
        >
            <ScrollView 
                style={Style.mainScrollView} 
                contentContainerStyle={{ 
                    alignItems: 'center', 
                    paddingHorizontal: 20,
                    paddingBottom: 60
                }} 
                keyboardShouldPersistTaps="handled"
                // desativando o overscrool pq tava cagando a camera
                overScrollMode='never'
            >
                <Text style={[GlobalStyle.titulo, Style.titulo]}>Perfil</Text>

                {/* view de avatar */}
                <View style={Style.viewCamera}>
                    <View style={Style.camera}>
                        <CameraView facing={facing} style={[Style.camera, Style.borderCamera]} ref={cameraRef} />
                    </View>

                    <View style={Style.viewBtnsCamera}>
                        <TouchableOpacity onPress={handleToggleCameraFacing}>
                            <FontAwesome6 
                                name="camera-rotate" 
                                size={Style.btnsCamera.fontSize} 
                                color={Style.btnsCamera.color} 
                            />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={handleTakePicture}>
                            <FontAwesome6 name="camera" 
                                size={Style.btnsCamera.fontSize} 
                                color={congelado ? Style.btnsCameraActive.color : Style.btnsCamera.color} 
                            />                
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={Style.viewForm}>
                    <View style={Style.viewInput}>
                        <Text style={Style.formLabel}>Nome completo</Text>
                        <TextInput
                            style={Style.formInput} 
                            placeholder='Joãozinho123'
                            placeholderTextColor={"#8e8e8e"}
                            value={nome}
                            onChangeText={(nome) => setNome(nome)}
                        />
                    </View>

                    <View style={Style.viewInput}>
                        <Text style={Style.formLabel}>Email</Text>
                        <TextInput 
                            style={Style.formInput}
                            placeholder='Joãozinho123@gmail.com'
                            placeholderTextColor={"#8e8e8e"}
                            value={email}
                            onChangeText={(email) => setEmail(email)}
                        />
                    </View>

                    <View style={Style.viewInput}>
                        <Text style={Style.formLabel}>Telefone</Text>
                        <TextInput 
                            keyboardType='numeric' 
                            style={ Style.formInput } 
                            placeholder='11 999999999'
                            placeholderTextColor={"#8e8e8e"}
                            value={telefone}
                            onChangeText={(telefone) => setTelefone(telefone)}
                        />
                    </View>

                    <TouchableOpacity style={Style.btnEnviar} onPress={handleSubmitForm}>
                        <Text style={Style.btnText} >Enviar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    </SafeAreaView>
);
}
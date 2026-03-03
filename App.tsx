import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function App() {
  const [MostarTexto, setMostrarTexto] = useState(false);

  return (
    <View style={styles.container}>
      <Image style={styles.imagemTop} source={require("./assets/imgs/logo.png")} resizeMode='contain'/>
      <StatusBar style="inverted" />
      <Text style={styles.textFds}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias perspiciatis voluptas sit minus? Ab libero voluptate suscipit harum. Accusamus voluptas dignissimos magni quo omnis perspiciatis enim quos eveniet nemo! Repellat.</Text>
      <Button title='Clique aqui' onPress={() => setMostrarTexto(prev => !prev)}/>


      <Text style={styles.textoTop}>{MostarTexto ? "🏳️‍🌈 Tu és gay 🏳️‍🌈" : ""}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3c0058',
    alignItems: 'center',
    justifyContent: 'center'
  },
  imagemTop: {
    borderRadius: 25
  },
  textFds: {
    width: "80%",
    textAlign: "center",
    color: "#fff",
    marginTop: 15,
    marginBottom: 15,
    fontSize: 15
  },
  textoTop: {
    width: "80%",
    textAlign: "center",
    color: "#ff00d0",
    marginTop: 15,
    marginBottom: 15,
    fontSize: 25,
    fontWeight: 600
  }
});

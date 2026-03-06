import { StyleSheet } from 'react-native';
import spacing from './Spacing';

const GlobalStyle = StyleSheet.create({
  main_banner_home : {
    padding: 0
  },
  main: {
    flex: 1,
    backgroundColor: "#36134f",
    padding: spacing.md,
    alignItems: "center"
  },
  titulo: {
    fontSize: 25,
    fontWeight: "600",
    color: "#fff",
    textAlign: "center",
  },
  subTitulo: {
    fontSize: 22,
    fontWeight: "600",
    color: "#fff",
    textAlign: "center"
  },
  texto: {
    fontSize: 18,
    fontWeight: 400,
    color: "#fff",
    textAlign: "justify"
  },
})

export default GlobalStyle;
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
  }
})

export default GlobalStyle;
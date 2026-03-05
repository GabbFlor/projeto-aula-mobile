import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './src/screens/home/Home';
import { NavigationContainer } from '@react-navigation/native';
import { Image, StyleSheet } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function App() {
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerRight: () => (
            <Image
              style={styles.logoHeader}
              source={require("./assets/icone-loja.png")}
              resizeMode="contain"
            />
          ),

          headerStyle: {
            backgroundColor: "#8F5ED6"
          },
          headerTitleStyle: {
            fontWeight: "regular"
          },
          drawerStyle: {
            backgroundColor: '#774eb0',
            width: 275,
          },
          headerTintColor: "#000000",
          overlayColor: "#905ed62a",
          drawerActiveBackgroundColor: "#5e3d8c",
          drawerActiveTintColor: "#fff",
          drawerInactiveTintColor: "#000000"
        }}
      >
        <Drawer.Screen 
          name='Início' 
          component={Home} 
          options={{
            drawerIcon: ({ size, color }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen 
          name='Produtos' 
          component={Home} 
          options={{
            drawerIcon: ({ size, color }) => (
              <AntDesign name="product" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen 
          name='Contato' 
          component={Home} 
          options={{
            drawerIcon: ({ size, color }) => (
              <AntDesign name="phone" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen 
          name='Encomendas' 
          component={Home} 
          options={{
            drawerIcon: ({ size, color }) => (
              <MaterialCommunityIcons name="truck-delivery" size={size} color={color} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  logoHeader: {
    height: 50,
    width: 50,
    marginRight: 10
  }
})
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './src/screens/Home';
import Test from './src/screens/Test';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function App() {

  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#8F5ED6"
          },
          headerTintColor: "#000000",
          headerTitleStyle: {
            fontWeight: "regular"
          },
          drawerStyle: {
            backgroundColor: '#774eb0',
            width: 275,
          },
          overlayColor: "#905ed62a",
          drawerActiveBackgroundColor: "#5e3d8c",
          drawerActiveTintColor: "white"
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
          name='Teste' 
          component={Test} 
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
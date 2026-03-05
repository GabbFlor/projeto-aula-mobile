import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './src/screens/Home';
import Test from './src/screens/Test';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {

  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='Início' component={Home} />
        <Drawer.Screen name='Teste' component={Test} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
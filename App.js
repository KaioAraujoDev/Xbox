import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import TelaInicial from './componentes/TelaInicial';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='TelaInicial' component={TelaInicial} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}



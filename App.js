import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import TelaInicial from './componentes/TelaInicial';
import TelaConsoles from './componentes/TelaConsoles';
import TelaJogos from './componentes/TelaJogos';
import TelaNuvem from './componentes/TelaNuvem';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='TelaInicial' component={TelaInicial} /> 
        <Stack.Screen name='Consoles' component={TelaConsoles}/>
        <Stack.Screen name='Jogos' component={TelaJogos}/>
        <Stack.Screen name='XCloud' component={TelaNuvem}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}



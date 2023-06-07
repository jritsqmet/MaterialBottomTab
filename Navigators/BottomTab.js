import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { NavigationContainer } from '@react-navigation/native';

import Ejercicio1 from '../Screens/Ejercicio1';
import Ejercicio2 from '../Screens/Ejercicio2';


const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Ejercicio1" component={Ejercicio1} />
      <Tab.Screen name="Ejercicio2" component={Ejercicio2} />
    </Tab.Navigator>
  );
}

export default function TabNavigator(){
    return(
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    )
}
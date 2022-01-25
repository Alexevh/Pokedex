import React from 'react';
import { SearchScreen } from '../screens/SearchScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { PokemonScreen } from '../screens/PokemonScreen';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';


const Tab2 = createStackNavigator<RootStackParams>();

/* voy a definir los parametros de mis rutas */
export type RootStackParams = {
  SearchScreen: undefined;
  PokemonScreen: {simplePokemon: SimplePokemon, color: string};
  
};

export const Tab2Screen = ()=>{
  return (<Tab2.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Tab2.Screen name="SearchScreen" component={SearchScreen}  />
      <Tab2.Screen name="PokemonScreen" component={PokemonScreen} />
    </Tab2.Navigator>)
}

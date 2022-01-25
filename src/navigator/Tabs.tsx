import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Navigator } from './Navigator';
import { SearchScreen } from '../screens/SearchScreen';
import { Payments } from '../screens/Payments';
import { Platform } from 'react-native';
import Icon  from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';
import { PokemonScreen } from '../screens/PokemonScreen';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import { Tab2Screen } from './Tab2';

const Tab = createBottomTabNavigator();


export const Tabs = ()=> {
  return (
    <Tab.Navigator
    
    
    sceneContainerStyle={{
        backgroundColor: 'white',
        
    }}
    screenOptions={{
        tabBarActiveTintColor: '#5856D6',
        headerShown: false,
        tabBarStyle: {
          borderWidth: 0,
          elevation: 0,
          height: Platform.OS==='android' ? 60 : 0,
          position: 'absolute',
          backgroundColor: 'rgba(255,255,255,0.92)',

        },
        tabBarLabelStyle: {
            marginBottom: (Platform.OS==='ios') ? 0 : 10
        },
       
       
      }}
     
    >
      <Tab.Screen 
      options={{
        tabBarLabel: 'List',
        tabBarIcon: ({color})=> <Icon color={color} size={20} name="list-outline"/>
      }}
      name="Home" component={Navigator} />
      <Tab.Screen 
       options={{
        tabBarLabel: 'Search',
        tabBarIcon: ({color})=> <Icon color={color} size={20} name="search-outline"/>
      }}
      name="Search" component={Tab2Screen} />
      <Tab.Screen
       options={{
        tabBarLabel: 'Donations',
        tabBarIcon: ({color})=> <Icon color={color} size={20} name="cash-outline"/>
      }}
      name="Donations" component={Payments} />
    </Tab.Navigator>
  );
}
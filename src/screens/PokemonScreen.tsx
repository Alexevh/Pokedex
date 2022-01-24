import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';

export const PokemonScreen = () => {

 const {isLoading, simplePokemonList } = usePokemonPaginated();

  return <View>
     
  

  </View>;
};

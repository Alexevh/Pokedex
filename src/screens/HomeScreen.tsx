import React from 'react';
import {View, Text, Image, FlatList, ActivityIndicator} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import {globalStyles} from '../theme/appTheme';
import {PokemonScreen} from './PokemonScreen';
import {usePokemonPaginated} from '../hooks/usePokemonPaginated';
import {FadeInImage} from '../components/fadeInImage';
import {PokemonCard} from '../components/pokemonCard';

export const HomeScreen = () => {
  //voy a prevenir que el texto se pegue al tope del telefono invadiento el safe area
  const {top} = useSafeAreaInsets();
  const {isLoading, simplePokemonList, loadPokemons} = usePokemonPaginated();

  return (
    <>
      <Image
        source={require('../assets/pokebola.png')}
        style={globalStyles.pokebolaBG}
      />

<View style={{
    ...globalStyles.globalMargin,
    alignItems: 'center'
}}>
<FlatList
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <Text
            style={{
              ...globalStyles.title,
              ...globalStyles.globalMargin,
              top: top + 20,
              marginBottom: top + 20,
            }}>
            Pokedex
          </Text>
        }
        numColumns={2}
        data={simplePokemonList}
        keyExtractor={pokemon => pokemon.id}
        renderItem={({item, index}) => <PokemonCard pokemon={item} />}
        onEndReached={loadPokemons}
        onEndReachedThreshold={0.4}
        ListFooterComponent={
          <ActivityIndicator style={{height: 100}} size={20} color={'green'} />
        }
      />

</View>
      
    </>
  );
};

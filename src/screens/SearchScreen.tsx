import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Platform,
  Text,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import { Loading } from '../components/loading';
import {PokemonCard} from '../components/pokemonCard';
import {SearchInput} from '../components/searchInput';
import {usePokemonSearch} from '../hooks/usePokemonSearch';
import {SimplePokemon} from '../interfaces/pokemonInterfaces';
import {globalStyles} from '../theme/appTheme';

export const SearchScreen = () => {
  const {top} = useSafeAreaInsets();

  const screenWidth = Dimensions.get('window').width;

  const {isFetching, simplePokemonList} = usePokemonSearch();

  const [term, setTerm] = useState('term');

  const [pokemonFiltered, setPokemonFiltered] = useState<SimplePokemon[]>([]);


  useEffect(() => {
    
    if(term.length===0) {
        //aplico filtro
        return setPokemonFiltered([]);

    }
     //aplico filtro
    if(term.length >0) {
       
        /* si me viene un texto, o sea no un numero busco por nombre */
    if (isNaN(Number(term))){
        setPokemonFiltered(

            simplePokemonList.filter((poke) => poke.name.toLowerCase().includes(term.toLowerCase()))
        )
        
    } else {
        setPokemonFiltered(

            simplePokemonList.filter((poke) => poke.id.includes(term))
        )

        }
      
    }
  
  }, [term]);
  

  if (isFetching) {
    return (
      <Loading />
    );
  }

  return (
    <View style={{flex: 1, marginHorizontal: 20, marginTop: 10}}>
      <SearchInput
        onDebounce={setTerm}
        style={{
          position: 'absolute',
          zIndex: 999,
          width: screenWidth - 40,
          top: Platform.OS === 'ios' ? top : top + 10,
        }}
      />

      <FlatList
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <Text
            style={{
              ...globalStyles.title,
              ...globalStyles.globalMargin,
              marginTop: top + 10,
            }}>
            {term}
          </Text>
        }
        numColumns={2}
        data={pokemonFiltered}
        keyExtractor={pokemon => pokemon.id}
        renderItem={({item, index}) => <PokemonCard pokemon={item} />}
        onEndReachedThreshold={0.4}
     
      />
    </View>
  );
};

import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {ActivityIndicator, FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { FadeInImage } from '../components/fadeInImage';
import { usePokemon } from '../hooks/usePokemon';
import {usePokemonPaginated} from '../hooks/usePokemonPaginated';
import {RootStackParams} from '../navigator/Navigator';

/* esto es debido que tengo configurado los paras en el navigator */
interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> {}

export const PokemonScreen = ({navigation, route}: Props) => {
  /* obtengo los params */
  const {simplePokemon, color} = route.params;


  const {isLoading, pokemon} = usePokemon(simplePokemon.id);

  /* esto es para prevenir problemas con el notch d ios */
  const {top} = useSafeAreaInsets();

  /* el zindex es para que los elementos pasen abajo de ese cuadrado */
  return (
    <View style={{flex: 1}}>
      {/*  header*/}
      <View
        style={{
          ...styles.headerContai9ner,
          backgroundColor: color,
        }}>
        {/** backbutton */}
        <TouchableOpacity
          activeOpacity={0.8}
          style={{...styles.backButton, top: top + 5}}
          onPress={() => navigation.pop()}>
          <Icon name="arrow-back-outline" color="white" size={35} />
        </TouchableOpacity>
        {/** Nombre del pokemon */}

        <Text
        style={{...styles.pokemonName, top: top+40}}
        
        >{simplePokemon.name + '\n'} #{simplePokemon.id} </Text>

        {/* pokebola blanca */}
        <Image
        
        source={require('../assets/pokebola-blanca.png')}
        style={{
          ...styles.pokebola
        }}

        />

        <FadeInImage 
         uri={simplePokemon.picture}
         style={{
          ...styles.pokemonImage
         }}
        />

      </View>

           {/** detalles y loader */}
           <View style={{
             ...styles.loadingIndicator
           }}>
             <ActivityIndicator
             color={color} 
             size={50
             }/>
           </View>


    </View>
  );
};

const styles = StyleSheet.create({
  headerContai9ner: {
    zIndex: 999,
    height: 350,

    alignItems: 'center',
    borderBottomRightRadius: 1000,
    borderBottomLeftRadius: 1000,
  },
  backButton: {
    position: 'absolute',
    left: 20,
  },
  pokemonName:{
    color: 'white',
    fontSize: 40,
    alignSelf: 'flex-start',
    left: 20
  },
  pokebola: {
    width: 250,
    height: 250,
    bottom: 1,
    opacity: 0.7
  },
  pokemonImage: {
    width: 250,
    height: 250,
    position: 'absolute',
    bottom: -15,
  },
  loadingIndicator:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

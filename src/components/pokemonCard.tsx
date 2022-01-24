import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SimplePokemon} from '../interfaces/pokemonInterfaces';
import {globalStyles} from '../theme/appTheme';
import {FadeInImage} from './fadeInImage';
import ImageColors from 'react-native-image-colors'

const windowWidth = Dimensions.get('window').width;

interface Props {
  pokemon: SimplePokemon;
}

export const PokemonCard = ({pokemon}: Props) => {

const [bgColor, setBgColor] = useState('grey');


 useEffect(() => {
   

    ImageColors.getColors(pokemon.picture, {fallback: 'grey'}).then(
    colors =>{

            if (colors.platform ==='android'){

                setBgColor(colors.dominant || 'green');

            }

            if (colors.platform ==='ios'){
                setBgColor(colors.background)
            }
        }
    );
  
 
 }, []);
 

  return (
    <View>
      <TouchableOpacity>
        <View
          style={{
            ...styles.cardContainer,
            width: windowWidth * 0.4,
            backgroundColor: bgColor
          }}>
          <View>
            <Text style={styles.name}>
              {pokemon.name}
              {'\n#' + pokemon.id}
            </Text>
          </View>


{/* la pokebola se sale de la caja asi que para cortala sin tener que poner overflow hidded (por que me afecta a las imagenes que si
    quiero se salgan de la caja) pongo un view y lo recorto */}
<View style={styles.pokebolaContainer}>
<Image
            source={require('../assets/pokebola-blanca.png')}
            style={{
              ...globalStyles.pokebola,
            }}
          />
</View>
    

          <FadeInImage
            uri={pokemon.picture}
            style={{
              ...globalStyles.pokemonImage,
            }}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 10,
    height: 120,
    width: 160,
    marginBottom: 25,
    borderRadius: 5,
    //overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  name: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    top: 20,
    left: 10,
  },
  pokebolaContainer: {
    width: 100,
    height: 100,
    position: 'absolute',
    bottom: -20,
    right: -20,
    opacity: 0.5,
    overflow: 'hidden'
  }
});

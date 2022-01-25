import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { PokemonFull } from '../interfaces/pokemonInterfaces';
import { FadeInImage } from './fadeInImage';


interface Props {
    pokemon: PokemonFull;
}

export const PokemonDetails = ({pokemon}: Props) => {
  return (
  <ScrollView
  showsVerticalScrollIndicator={false}
    style={{
        ...StyleSheet.absoluteFillObject,
        marginTop: 370

    }}
  > 

  <View style={{
      ...styles.container
  }}>

      <Text style={{...styles.title}}>Types</Text>
      
      <View  style={{flexDirection: 'row'}}>
          {
              pokemon.types.map(({type})=> (
                  <Text key={type.name} style={{...styles.regularText, marginRight: 10}}>{type.name}</Text>
              ))
          }
    </View>

    <Text style={{...styles.title}}>Peso</Text>
    <Text style={{...styles.regularText}}>{pokemon.weight}kg</Text>

  </View>

           {/**sprites */}
  <View style={{...styles.container}}> 
  <Text style={{...styles.title}}>Sprites</Text>

  <ScrollView
  
  horizontal={true}
  showsHorizontalScrollIndicator={false}
  >

      <FadeInImage
        uri={pokemon.sprites.front_default}
        style={{...styles.basicSprite}}
      />
      <FadeInImage
        uri={pokemon.sprites.back_default}
        style={{...styles.basicSprite}}
      />
      
      <FadeInImage
        uri={pokemon.sprites.front_shiny}
        style={{...styles.basicSprite}}
      />
      <FadeInImage
        uri={pokemon.sprites.back_shiny}
        style={{...styles.basicSprite}}
      />
     
  </ScrollView>

  <View style={{
      ...styles.container
  }}>

      <Text style={{...styles.title}}>Base Skills</Text>
      <View  style={{flexDirection: 'row'}}>
          {
              pokemon.abilities.map(({ability})=> (
                  <Text key={ability.name} style={{...styles.regularText, marginRight: 10}}>{ability.name}</Text>
              ))
          }
    </View>

      </View>

      <View style={{
      ...styles.container
  }}>

      <Text style={{...styles.title}}>Movements</Text>
      <View  style={{flexWrap: 'wrap', flexDirection: 'row'}}>
          {
              pokemon.moves.map(({move})=> (
                  <Text key={move.name} style={{...styles.regularText, marginRight: 10}}>{move.name}</Text>
              ))
          }
    </View>

      </View>

      <View style={{
      ...styles.container
  }}>

      <Text style={{...styles.title}}>Stats</Text>
      <View >
          {
              pokemon.stats.map((stat, i)=> (
                  <View key={stat.stat.name+i}   style={{ flexDirection:'row' }}>

                      <Text style={{...styles.regularText, marginRight: 10, width:150}}>{stat.stat.name}</Text>
                      <Text style={{...styles.regularText, fontWeight: 'bold'}}>{stat.base_stat}</Text>
                
                </View>
              ))
          }
    </View>

      </View>

      <View style={{

          marginBottom: 20,
          alignItems: 'center'
      }}>
      <FadeInImage
        uri={pokemon.sprites.front_default}
        style={{...styles.basicSprite}}
      />
      </View>

  </View>

  </ScrollView>)
};


const styles = StyleSheet.create({

    container: {
        marginHorizontal: 20,

    },
    title:{
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 20
    },
    regularText:{
        fontSize: 17,

    },
    basicSprite: {
        width:100,
        height:100
    }
});
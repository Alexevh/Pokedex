import React, { useEffect, useRef, useState } from 'react';
import pokemonApi from '../api/pokemonApi';
import { PokemonPaginatedResponse, Result, SimplePokemon } from '../interfaces/pokemonInterfaces';

export const usePokemonSearch = () => {

    const [isFetching, setIsFetching] = useState(true);
    const [simplePokemonList, setSimplePokemonList] = useState<SimplePokemon[]>([]);


     /* como la API nos trae la data medio rota y yo hice una interfaz llamada SimplePokemon para modelar los datos como quiero
     tengo que convertir lo que me mandan de la api en la resp a un dato que se adapte a esa interfaz
     recibo una lista de Result (nombre de mierda le puse a esa interfaz)
     */
    const mapPokemonListToSimplePokemon = (pokemonList: Result[])=>{

      

        /* cuando hago el mapeo desestructuro name y url solo para no tener que hacer result.name y rsul.url */
        const newPokemonList: SimplePokemon[] = pokemonList.map(({name, url})=> {

            /* quiero  obtener el ID que me lo trae al penultima posicion de la url del pokemon*/
            const urlParts = url.split('/');
            const id =  urlParts[urlParts.length-2];
            const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

                /* por cada registro regreso un objeto con las propiedades validad de un simplepokemon poblando asi la lista */
            return {
                id,
                picture,
                name
            }

        });

        /* seteo la lista nueva */
        setSimplePokemonList([...newPokemonList]);
        setIsFetching(false);

    }


    const loadPokemons = async ()=>{

        const resp = await pokemonApi.get<PokemonPaginatedResponse>('https://pokeapi.co/api/v2/pokemon?limit=1200')
        mapPokemonListToSimplePokemon(resp.data.results);
        

    }

    useEffect(() => {
    
      loadPokemons();
    }, []);
    
   return {
       isFetching,
       simplePokemonList,
     
        }

};

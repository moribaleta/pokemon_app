import {DataState, PokemonDetailState} from './types';
import {proxy, useSnapshot} from 'valtio';

export const dataState = proxy<DataState>({
  isLogin: false,
  pokemons: [],

  maxCount: Number.POSITIVE_INFINITY,
});

export const useDataSnapshot = () => useSnapshot(dataState) as DataState;

export const pokemonDetailState = proxy<PokemonDetailState>({
  details: new Map(),
});

export const usePokemonDetail = (pokemon: string) => {
  const {details} = useSnapshot(pokemonDetailState);
  return details.get(pokemon);
};

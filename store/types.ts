import {PokemonDetail} from '../types/types';

export interface DataState {
  isLogin: boolean;
  pokemons: any[];
  isLoadingPokemons?: boolean;
  isBatchFetching?: boolean;
  maxCount: number;
}

export interface PokemonDetailState {
  details: Map<string, PokemonDetail>;
}

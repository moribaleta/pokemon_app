import {dataState, pokemonDetailState} from './state';

import {API} from '../api/api';
import {PokemonDetail} from '../types/types';
import {clearDuplicate} from '../utils/functions';

export const DataStateActions = {
  setLogin(isLogin: boolean) {
    dataState.isLogin = isLogin;
  },
  fetchInitialPokemons: (onError: (error: Error) => void) => {
    dataState.isLoadingPokemons = true;
    API.fetchPokemonList(0, 10)
      .then(response => {
        dataState.maxCount = response.count;
        dataState.pokemons = response.results;
      })
      .catch(onError)
      .finally(() => {
        dataState.isLoadingPokemons = false;
      });
  },
  batchFetchPokemons: (onError: (error: Error) => void) => {
    if (dataState.maxCount <= dataState.pokemons.length) {
      return;
    }
    dataState.isBatchFetching = true;
    API.fetchPokemonList(dataState.pokemons.length)
      .then(response => {
        const cleared = clearDuplicate([
          ...dataState.pokemons,
          ...response.results,
        ]);
        dataState.pokemons = [...cleared];
      })
      .catch(onError)
      .finally(() => {
        dataState.isBatchFetching = false;
      });
  },
};

export const PokemonDetailStateActions = {
  setDetail(pokemonDetail: PokemonDetail) {
    pokemonDetailState.details.set(pokemonDetail.name, pokemonDetail);
  },
};

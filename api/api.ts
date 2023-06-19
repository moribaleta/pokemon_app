import {Pokemon, PokemonDetail} from '../types/types';

import {ApiResponseList} from './types';

const BASE_URL = 'https://pokeapi.co/api/v2/';

export const API = {
  fetchPokemonList: async (
    offset = 0,
    limit = 10,
  ): Promise<ApiResponseList<Pokemon>> => {
    return await fetch(`${BASE_URL}/pokemon/?limit=${limit}&offset=${offset}`)
      .then(res => res.json())
      .then(json => {
        return json as ApiResponseList<Pokemon>;
      });
  },

  getPokemonDetail: async (url: string): Promise<PokemonDetail> => {
    return await fetch(url)
      .then(res => res.json())
      .then(json => {
        return json as PokemonDetail;
      });
  },
};

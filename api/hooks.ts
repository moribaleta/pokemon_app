import {useEffect, useState} from 'react';

import {API} from './api';
import {Pokemon} from '../types/types';
import {PokemonDetailStateActions} from '../store/actions';
import {usePokemonDetail} from '../store/state';

export const useGetPokemonDetail = ({name, url}: Pokemon) => {
  const [isLoading, setLoading] = useState(true);
  const detail = usePokemonDetail(name);
  //const [detail, setDetail] = useState<PokemonDetail>();

  useEffect(() => {
    if (url && !detail) {
      setLoading(true);
      API.getPokemonDetail(url)
        .then(fetchDetail => {
          PokemonDetailStateActions.setDetail(fetchDetail);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [detail, url]);

  return {
    isLoading,
    detail,
  };
};

import {DataStateActions} from '../../store/actions';
import {HomeHookProps} from './types';
import {Pokemon} from '../../types/types';
import {useDataSnapshot} from '../../store/state';
import {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

export const useHomeHooks = (): HomeHookProps => {
  const {pokemons, isLoadingPokemons} = useDataSnapshot();
  const {navigate} = useNavigation();

  useEffect(() => {
    onRefresh();
  }, []);

  const onRefresh = () => {
    DataStateActions.fetchInitialPokemons((error: Error) => {
      console.log(error);
    });
  };

  const onBatchFetch = () => {
    DataStateActions.batchFetchPokemons((error: Error) => {
      console.log(error);
    });
  };

  const onViewPokemon = (pokemon: Pokemon) => {
    navigate('Detail', {pokemon});
  };

  return {
    pokemons,
    isLoading: isLoadingPokemons,
    onRefresh,
    onBatchFetch,
    onViewPokemon,
  };
};

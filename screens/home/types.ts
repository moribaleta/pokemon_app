import {Pokemon} from '../../types/types';

export interface HomeHookProps {
  pokemons: Pokemon[];
  isLoading?: boolean;
  onRefresh: () => void;
  onBatchFetch: () => void;
  onViewPokemon: (pokemon: Pokemon) => void;
}

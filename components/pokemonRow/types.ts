import {Pokemon} from '../../types/types';

export interface PokemonRowProps {
  pokemon: Pokemon;
  onView: () => void;
}

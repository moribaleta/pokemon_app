import {ImageStyle} from 'react-native';
import {Type} from '../../types/types';

export interface PokemonImageProps {
  url?: string;
  isLoading: boolean;
  type?: Type;
  style?: ImageStyle;
}

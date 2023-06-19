import Loader from '../loader';
import {PokemonImageProps} from './types';
import React from 'react';
import Reanimated from 'react-native-reanimated';
import {getBackgroundColorByType} from '../../utils/functions';
import styles from './styles';

const PokemonImage = ({url, isLoading, type, style}: PokemonImageProps) => {
  if (isLoading) {
    return <Loader />;
  } else {
    return (
      <Reanimated.Image
        loadingIndicatorSource={{
          uri: url,
        }}
        style={[
          styles.image,
          {
            backgroundColor: getBackgroundColorByType(type),
          },
          style,
        ]}
        source={{uri: url}}
      />
    );
  }
};

export default PokemonImage;

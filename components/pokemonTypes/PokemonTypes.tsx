import {Text, View} from 'react-native';

import {PokemonTypesProps} from './types';
import React from 'react';
import {getBackgroundColorByType} from '../../utils/functions';
import styles from './styles';

const PokemonTypes = ({types}: PokemonTypesProps) => {
  const renderTags = () => {
    return types?.map(type => (
      <Text
        key={type.type.name}
        style={[
          styles.tag,
          {
            backgroundColor: getBackgroundColorByType(type),
          },
        ]}>
        {type.type.name}
      </Text>
    ));
  };

  return <View style={styles.main}>{renderTags()}</View>;
};

export default PokemonTypes;

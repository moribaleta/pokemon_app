import {Text, View} from 'react-native';

import PokemonImage from '../pokemonImage';
import {PokemonRowProps} from './types';
import PokemonTypes from '../pokemonTypes';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from './styles';
import {useGetPokemonDetail} from '../../api/hooks';

const PokemonRow = ({pokemon, onView}: PokemonRowProps) => {
  const {isLoading, detail} = useGetPokemonDetail(pokemon);
  return (
    <TouchableOpacity style={styles.main} onPress={onView}>
      <PokemonImage
        isLoading={isLoading}
        url={detail?.sprites?.front_default}
        type={detail?.types[0]}
        style={styles.image}
      />
      <Text style={styles.name}>{pokemon.name.toUpperCase()}</Text>
      <PokemonTypes types={detail?.types ?? []} />
      <Text style={styles.detail}>base exp: {detail?.base_experience}</Text>
      <View style={styles.detailContainer}>
        <Text style={styles.detail}>height: {detail?.height}</Text>
        <Text style={styles.detail}>weight: {detail?.weight}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(PokemonRow, (prev, next) => {
  return prev.pokemon.name === next.pokemon.name;
});

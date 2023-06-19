import {FlatList, ListRenderItemInfo, View} from 'react-native';

import {Pokemon} from '../../types/types';
import PokemonRow from '../../components/pokemonRow';
import React from 'react';
import styles from './styles';
import {useHomeHooks} from './hooks';

const Home = () => {
  const {isLoading, pokemons, onRefresh, onBatchFetch, onViewPokemon} =
    useHomeHooks();

  const pokemonRow = ({item}: ListRenderItemInfo<Pokemon>) => {
    return <PokemonRow pokemon={item} onView={() => onViewPokemon(item)} />;
  };

  return (
    <View style={styles.main}>
      <FlatList
        contentContainerStyle={styles.list}
        data={pokemons}
        renderItem={pokemonRow}
        keyExtractor={(item, index) => item.name + index}
        onRefresh={onRefresh}
        refreshing={isLoading ?? false}
        onEndReached={onBatchFetch}
        onEndReachedThreshold={1}
      />
    </View>
  );
};

export default Home;

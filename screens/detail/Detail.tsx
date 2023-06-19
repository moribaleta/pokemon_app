import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  Text,
  View,
} from 'react-native';
import Reanimated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

import {DetailProps} from './types';
import PokemonImage from '../../components/pokemonImage';
import PokemonTypes from '../../components/pokemonTypes';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {getBackgroundColorByType} from '../../utils/functions';
import styles from './styles';
import {useGetPokemonDetail} from '../../api/hooks';

const Detail = ({route}: DetailProps) => {
  const {pokemon} = route.params;
  const {isLoading, detail} = useGetPokemonDetail(pokemon);
  const renderAbilities = () => {
    return detail?.abilities.map(ability => {
      return (
        <Text key={ability.ability.name} style={styles.detail}>
          {ability.ability.name}
        </Text>
      );
    });
  };

  const renderForms = () => {
    return detail?.forms.map(form => {
      return (
        <Text key={form.name} style={styles.detail}>
          {form.name}
        </Text>
      );
    });
  };

  const renderGameIndices = () => {
    return detail?.game_indices.map((item, index) => {
      return (
        <Text key={index} style={styles.detail}>
          {item.game_index} | {item.version.name}
        </Text>
      );
    });
  };

  const renderHeldItems = () => {
    return detail?.held_items.map((item, index) => {
      return (
        <Text key={index} style={styles.detail}>
          base stats: {item.item.name}
        </Text>
      );
    });
  };

  const renderStats = () => {
    return detail?.stats.map((stat, index) => {
      return (
        <View key={index}>
          <Text style={styles.detail}>base stats: {stat.base_stat}</Text>
          <Text style={styles.detail}>effort: {stat.effort}</Text>
        </View>
      );
    });
  };

  const imageSize = useSharedValue(0);

  const eventScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offset = event.nativeEvent.contentOffset.y;
    imageSize.value = offset;
    console.log(offset);
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      flex: 1,
      transform: [
        {
          scaleX: interpolate(imageSize.value, [0, 1000], [1, -1]),
        },
        {
          scaleY: interpolate(imageSize.value, [0, 1000], [1, -1]),
        },
        {
          translateY: interpolate(imageSize.value, [0, 100], [1, 100]),
        },
      ],
    };
  }, []);

  return (
    <ScrollView style={styles.main} onScroll={eventScroll}>
      <View
        style={[
          styles.imageContainer,
          {backgroundColor: getBackgroundColorByType(detail?.types[0])},
        ]}>
        <Reanimated.View style={animatedStyle}>
          <PokemonImage
            url={detail?.sprites?.front_default}
            isLoading={isLoading}
            type={detail?.types[0]}
          />
        </Reanimated.View>
      </View>

      <View style={styles.detailContainer}>
        <Text style={styles.name}>{pokemon.name.toUpperCase()}</Text>
        <PokemonTypes types={detail?.types} />
        <Text style={styles.detail}>base exp: {detail?.base_experience}</Text>
        <Text style={styles.detail}>height: {detail?.height}</Text>
        <Text style={styles.detail}>weight: {detail?.weight}</Text>
        <Text style={styles.detail}>
          location encountered: {detail?.location_area_encounters}
        </Text>
        <Text style={styles.section}>Abilities</Text>
        {renderAbilities()}
        <Text style={styles.section}>Forms</Text>
        {renderForms()}
        <Text style={styles.section}>Stats</Text>
        {renderStats()}
        <Text style={styles.section}>Held Items</Text>
        {renderHeldItems()}
        <Text style={styles.section}>Game Indices</Text>
        {renderGameIndices()}
      </View>
    </ScrollView>
  );
};

export default Detail;

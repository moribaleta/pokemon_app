import {ActivityIndicator, View} from 'react-native';

import {LoaderProps} from './types';
import React from 'react';
import styles from './styles';

const Loader = ({}: LoaderProps) => {
  return (
    <View style={styles.main}>
      <ActivityIndicator />
    </View>
  );
};

export default Loader;

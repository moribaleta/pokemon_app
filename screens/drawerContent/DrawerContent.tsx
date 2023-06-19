import {
  DrawerContentComponentProps,
  DrawerItem,
} from '@react-navigation/drawer';

import {DataStateActions} from '../../store/actions';
import React from 'react';
import {View} from 'react-native';
import styles from './styles';

const DrawerContent = ({navigation}: DrawerContentComponentProps) => {
  return (
    <View style={styles.main}>
      <DrawerItem
        label={'Logout'}
        onPress={() => {
          DataStateActions.setLogin(false);
          navigation.reset({
            routes: [{name: 'Login'}],
          });
        }}
      />
    </View>
  );
};

export default DrawerContent;

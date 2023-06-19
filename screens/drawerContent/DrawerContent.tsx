import {
  DrawerContentComponentProps,
  DrawerItem,
} from '@react-navigation/drawer';

import {DataStateActions} from '../../store/actions';
import React from 'react';
import {View} from 'react-native';
import styles from './styles';

const DrawerContent = ({navigation}: DrawerContentComponentProps) => {
  const onLogout = () => {
    DataStateActions.setLogin(false);
    navigation.reset({
      routes: [{name: 'Login'}],
    });
  };

  return (
    <View style={styles.main}>
      <DrawerItem label={'Logout'} onPress={onLogout} />
    </View>
  );
};

export default DrawerContent;

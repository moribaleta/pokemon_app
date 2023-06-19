import {DrawerContent, createDrawerNavigator} from '@react-navigation/drawer';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import Detail from '../screens/detail';
import Home from '../screens/home';
import Login from '../screens/login';
import {Pokemon} from '../types/types';
import React from 'react';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Detail: {pokemon: Pokemon};
};

export type RootNavigationDetail = NativeStackScreenProps<
  RootStackParamList,
  'Detail'
>;

const Stack = createNativeStackNavigator<RootStackParamList>();
const LeftDrawer = createDrawerNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={HomeNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={({route}) => ({
          title: route.params.pokemon.name.toUpperCase(),
        })}
      />
    </Stack.Navigator>
  );
};

const HomeNavigation = () => {
  return (
    <LeftDrawer.Navigator drawerContent={DrawerContent}>
      <LeftDrawer.Screen name="Pokemon" component={Home} />
    </LeftDrawer.Navigator>
  );
};

export default Navigation;

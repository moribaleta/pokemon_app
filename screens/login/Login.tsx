import {Image, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useIsFocused, useNavigation} from '@react-navigation/native';

import Button from '../../components/button';
import {LoginProps} from './types';
import {TextInput} from 'react-native-gesture-handler';
import styles from './styles';
import {useDataSnapshot} from '../../store/state';
import {useLoginHooks} from './hooks';

const Login = ({}: LoginProps) => {
  const {isLogin} = useDataSnapshot();
  const {navigate} = useNavigation();
  const {onLogin, setUsername, setPassword} = useLoginHooks();
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused && isLogin) {
      navigate('Home');
    }
  }, [isFocused, isLogin, navigate]);

  return (
    <View style={styles.main}>
      <Image
        style={styles.background}
        source={require('../../resources/images/pokemon-background.jpeg')}
      />
      <Text style={styles.title}>Pokemon</Text>
      <View style={styles.loginContainer}>
        <Text style={styles.loginTitle}>Login</Text>
        <TextInput style={styles.textInput} onChangeText={setUsername} />
        <TextInput
          secureTextEntry
          style={styles.textInput}
          onChangeText={setPassword}
        />
        <Button title="Login" onPress={onLogin} />
      </View>
    </View>
  );
};

export default Login;

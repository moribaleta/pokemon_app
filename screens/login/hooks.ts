import {StackActions, useNavigation} from '@react-navigation/native';

import {DataStateActions} from '../../store/actions';
import {LoginHookProps} from './types';
import {useState} from 'react';

export const useLoginHooks = (): LoginHookProps => {
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();

  const navigation = useNavigation();
  const onLogin = () => {
    if (username?.length && (password?.length ?? 0) >= 8) {
      DataStateActions.setLogin(true);
      navigation.dispatch(StackActions.replace('Home'));
    }
  };

  return {
    onLogin,
    setUsername,
    setPassword,
  };
};

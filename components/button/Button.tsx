import {ButtonProps} from './types';
import React from 'react';
import {Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from './styles';

const Button = ({title, onPress, style}: ButtonProps) => {
  return (
    <TouchableOpacity style={[styles.main, style]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

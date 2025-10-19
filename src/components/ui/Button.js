import React from 'react';
import { TouchableOpacity, Text as RNText } from 'react-native';
import styles from '../../styles/styles';

export default function Button({ children, onPress, style, disabled }) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]} disabled={disabled}>
      <RNText style={styles.buttonText}>{children}</RNText>
    </TouchableOpacity>
  );
}

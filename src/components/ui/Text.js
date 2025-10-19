import React from 'react';
import { Text as RNText } from 'react-native';
import styles from '../../styles/styles';

export default function Text({ children, style, ...props }) {
  return <RNText style={[styles.text, style]} {...props}>{children}</RNText>;
}

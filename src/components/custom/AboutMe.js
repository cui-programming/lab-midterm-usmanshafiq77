import React from 'react';
import { View, Text } from '../ui';
import styles from '../../styles/styles';
import { STUDENT_NAME, REG_NO } from '../../config/student';

export default function AboutMe({ name, regNo }) {
  const displayName = name ?? STUDENT_NAME;
  const displayReg = regNo ?? REG_NO;

  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{displayName}</Text>
      <Text style={styles.headerText}>{displayReg}</Text>
    </View>
  );
}

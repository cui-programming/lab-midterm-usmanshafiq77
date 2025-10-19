import React from 'react';
import { FlatList } from 'react-native';
import { View, Text, Button } from '../ui';
import styles from '../../styles/styles';

export default function TasbihList({ items, setItems }) {

  const increment = (id) => {
    setItems(prev =>
      prev.map(item => item.id === id ? { ...item, count: item.count + 1 } : item)
    );
  };

  const decrement = (id) => {
    setItems(prev =>
      prev.map(item => item.id === id ? { ...item, count: Math.max(0, item.count - 1) } : item)
    );
  };

  const renderItem = ({ item }) => (
    <View style={styles.tasbihRow}>
      <Text style={styles.tasbihPhrase}>{item.phrase}</Text>
      <View style={styles.tasbihCounterRow}>
        <Button onPress={() => decrement(item.id)}>-</Button>
        <Text style={styles.tasbihCount}>{item.count}</Text>
        <Button onPress={() => increment(item.id)}>+</Button>
      </View>
    </View>
  );

  return (
    <FlatList
      data={items}
      keyExtractor={item => item.id}
      renderItem={renderItem}
    />
  );
}

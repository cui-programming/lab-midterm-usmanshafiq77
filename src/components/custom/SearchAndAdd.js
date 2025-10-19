import React, { useState } from 'react';
import { View, Text, TextInput, Button } from '../ui';
import styles from '../../styles/styles';

export default function SearchAndAdd({ items, setItems }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [newPhrase, setNewPhrase] = useState('');

  const filteredItems = items.filter(item =>
    item.phrase.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addPhrase = () => {
    if (!newPhrase.trim()) return;

    const newItem = {
      id: Date.now().toString(),
      phrase: newPhrase.trim(),
      count: 0,
    };
    setItems(prev => [newItem, ...prev]);
    setNewPhrase('');
  };

  return (
    <View style={{ marginVertical: 12 }}>
      <Text style={{ fontWeight: '700', marginBottom: 6 }}>Search Azkaar</Text>
      <TextInput
        placeholder="Search..."
        value={searchTerm}
        onChangeText={setSearchTerm}
        style={{ marginBottom: 8 }}
      />

      <Text style={{ fontWeight: '700', marginBottom: 6 }}>Add New Azkaar</Text>
      <TextInput
        placeholder="New phrase..."
        value={newPhrase}
        onChangeText={setNewPhrase}
        style={{ marginBottom: 8 }}
      />
      <Button onPress={addPhrase}>Add</Button>

      <Text style={{ fontWeight: '700', marginVertical: 8 }}>Filtered Results</Text>
      {filteredItems.map(item => (
        <View key={item.id} style={styles.tasbihRow}>
          <Text style={styles.tasbihPhrase}>{item.phrase}</Text>
          <Text style={styles.tasbihCount}>{item.count}</Text>
        </View>
      ))}
    </View>
  );
}

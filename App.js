import React, { useState } from 'react';
import { View, ScrollView } from './src/components/ui';
import AboutMe from './src/components/custom/AboutMe';
import TeacherMessage from './src/components/custom/TeacherMessage';
import TasbihList from './src/components/custom/TasbihList';
import SearchAndAdd from './src/components/custom/SearchAndAdd';
import { initialAzkaar } from './src/data/azkaar';

export default function App() {
  const [items, setItems] = useState(initialAzkaar);

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 12 }}>
      <View>
        <AboutMe />
        <TeacherMessage message="Hello teacher — I updated my student config." />
        <SearchAndAdd items={items} setItems={setItems} />
        <TasbihList items={items} setItems={setItems} />
      </View>
    </ScrollView>
  );
}

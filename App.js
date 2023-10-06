import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Button, TextInput } from 'react-native';
import * as Speech from 'expo-speech';

export default function App() {

  const [text, setText] = useState('');

  const speak = () => {
    const thingToSay = text;
    Speech.speak(thingToSay);
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder='Type to hear' onChangeText={text => setText(text)} value={text} />
      <Button title="Press to hear some words" onPress={speak} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

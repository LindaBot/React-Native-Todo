import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
      <View style={styles.header}>
          <Text style={styles.title}>My Todo</Text>
      </View>
  )
}

const styles = StyleSheet.create({
  header: {
    height: 80, 
    paddingTop: 38, 
    backgroundColor: 'blue'
  },
  title: {
    paddingLeft: 20,
    color: "white",
    fontSize: 20
  }
});

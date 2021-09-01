import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import Header from './components/Header';
import Task from './components/Task';
import Horizontal from './components/Horizontal';

export default function App() {
  return (
    <View style={styles.container}>
      <Header text="TASKS"/>
      <Horizontal/>
      <View style={styles.itemcontainer}>
        <Task/>
        <Task/>
        <Task/>
        <Task/>
        <Task/>
        <Task/>
        <Task/>
        <Task/>
      </View>
      <TextInput style={styles.input} placeholder="Add Item"/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }, 
  itemcontainer: {
    flex: 1,
    marginTop: 5,
  },
  input:{
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
  }
})
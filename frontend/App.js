import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity,Alert, Keyboard } from 'react-native'
import Header from './components/Header';
import Task from './components/Task';
import Horizontal from './components/Horizontal';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { presets } from './babel.config';

export default function App() {

  const [tasks,setTask] = useState([]);
  const [text,setText] = useState('');

  const deleteTask = (itemId) =>{
    setTask(tasks.filter(item => item != itemId ));
  }
  const addItem = (item) =>{
    let existing;
    tasks.map((myItem)=>{
      if(myItem === item){
        Alert.alert('Adding Item Error','Item Existing');
        existing = true;
      }
    })

    if(!existing){
      if(!item)
        Alert.alert('Error', 'Please enter task text!');
      else{
        setTask(prevItem => {
          return [item,...prevItem]
        })
        setText('');
      }
    }
    Keyboard.dismiss();
  }

  return (
      <View style={styles.container}>
        <ScrollView >
          <Header text="TASKS"/>
          <Horizontal/>
          <View style={styles.itemcontainer}>
            {tasks.length > 0?
             (tasks.map((item,index) => {
              return <Task key={index} task={item} itemId={item} deleteTask={deleteTask}/> 
            })): <Text style={styles.ifTask}>No Tasks To Show!</Text>
            }
          </View>
        </ScrollView>
        <View style={styles.bgInput}>
          <TextInput style={styles.input} placeholder="Add Item"
          onChangeText={(e) => setText(e)}
          value={text}/>
          <TouchableOpacity style={styles.icon} onPress={()=> addItem(text)}>
            <Icon name="paper-plane" size={35}></Icon>
          </TouchableOpacity>
        </View>
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
  ifTask:{
    fontSize: 20,   
    margin: 20,
    fontWeight: 'bold',
  },
  input:{
    flex: 1,
    height: 45,
    margin: 8,
    marginLeft: 15,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    width: '75%',
    backgroundColor: 'white',
  },
  bgInput:{
    paddingBottom: 62,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: 'rgba(150, 150, 150, .8)',
    },
  icon:{
    position: 'absolute',
    bottom: 10,
    right: 20,
  }
})
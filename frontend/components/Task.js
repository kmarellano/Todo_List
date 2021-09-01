import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

export default function Task({task,itemId,deleteTask}) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{task}</Text>
            <TouchableOpacity   style={styles.icon} onPress={() => deleteTask(itemId)}>
                <Icon name="check-circle" size={18}></Icon>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        margin: 5,
        width: '90%',
        marginLeft: 20,
        borderBottomWidth: 1,
        borderLeftWidth: 5,
        borderRightWidth: 1,
        borderLeftColor: 'blue',
        borderTopWidth: 1,
        borderRadius: 5,
    },
    icon:{
        marginTop: 15,
        position: 'absolute',
        left: 290,
    },
    text:{
        fontSize: 18,
        marginTop: 10,
        padding: 5,
        marginHorizontal: 5,
        width: '80%',
    },
})

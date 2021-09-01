import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'


export default function Task() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Sample</Text>
            <Icon name="check-circle" size={18} style={styles.icon}></Icon>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        margin: 5,
        width: '90%',
        marginLeft: 20,
        borderWidth: 1,
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
        marginHorizontal: 10,
        width: '80%',
    },
})

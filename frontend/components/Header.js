import { text } from 'express'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

export default function Header({text}) {
    return (
        <View style={styles.container}>
            <Icon name="tasks" size={20} style={styles.icon1}></Icon>
            <Text style={styles.text}>{text}</Text>
            <Icon name="search" size={20} style={styles.icon2}></Icon>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 0.12,
        flexDirection: 'row',
    },
    text:{
        fontSize: 20,
        marginTop: 20,
        fontWeight:'bold',
        left: 50,
    },
    icon1:{
        marginTop: 22,
        left: 20,
    },icon2:{
        marginTop: 22,
        left: 240,
    }
})

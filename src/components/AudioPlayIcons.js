import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Colors, Images } from '../utils'

const AudioPlayIcons = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <Image source={props.source} style={[styles.image, props.style]}/>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    image:{
        height:30,
        width:30,
        tintColor:Colors.playIconTintColor
    }
})


export default AudioPlayIcons

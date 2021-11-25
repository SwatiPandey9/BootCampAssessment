import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'

export default function CustomTouchableButtons(props) {
    return (
        <View style={styles.container} onpress>
        <TouchableOpacity>
            
            
            <Text>{props.title}</Text>
           
        </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        
        
    },
    image:{
        height:30,
        width:30,
        
    }
})

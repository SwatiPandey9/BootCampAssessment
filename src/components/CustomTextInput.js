import React from 'react'
import { View, Text, TextInput, StyleSheet, Dimensions } from 'react-native'
import { Colors } from '../utils'
const {height, width} = Dimensions.get('window')

const CustomTextInput = props => {
    return (
        
            <View>
                <Text style={styles.text}>{props.text}</Text>
            <TextInput 
                 placeholder={props.name}
                 value={props.value}
                 onChangeText={props.onChange}
                 style={styles.input}
            />
            </View>
        
    )
}
const styles = StyleSheet.create({
    text: {
        fontSize: height / 50,
        marginTop: height / 30,
        marginLeft: height / 30,
        color: Colors.iconColor,
      },
      input: {
        fontSize: height / 40,
        width: width / 1.3,
        fontWeight: 'bold',
        marginLeft: height / 30,
        borderBottomWidth: 3,
        borderBottomColor: '#f2f2f2',
        marginTop: height / 95,
      },
})

export default CustomTextInput;
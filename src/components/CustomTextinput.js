import React from 'react'
import { TextInput, StyleSheet, Dimensions } from 'react-native'

const {height, width} = Dimensions.get('window')

const CustomTextinput = (props) => {
    return (
       
        
        <TextInput 
        placeholder={props.name}
        value= {props.value}
        onChangeText= {props.onChange} 
        style={styles.textInput}
      /> 
      
    )
}

const styles = StyleSheet.create({
    
    textInput:{
        width:width/1.1,
        backgroundColor:'#FCF3CF',
        borderColor:'#F4D03F',
        borderWidth:1,
        alignSelf:'center',
        padding:height/50,
        margin: 10,
        borderRadius: height/50
    }
})


export default CustomTextinput

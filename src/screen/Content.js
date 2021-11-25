import React, { Component } from 'react'
import { View, Text, FlatList, StyleSheet, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native'

import {Data} from '../utils/index'

const {height, width}  = Dimensions.get('window')

class Content extends Component {

    indexList = ({item, i}) => {
        return(
        <View key={i} style={styles.indexContainer}>
            <TouchableOpacity onPress={() => {this.props.navigation.navigate(`${item.name}`)}}>
            <Text style={styles.titleText}>{item.id}  {item.title}</Text>
            </TouchableOpacity>
           
        </View>
        )
    }

    render(){
    return (
        <SafeAreaView>
            <View>
            <FlatList 
                data={Data.dataList}
                renderItem={this.indexList}
            />
            </View>
        </SafeAreaView>
    )}
}

const styles = StyleSheet.create({
    indexContainer:{
        width:width,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'#fff',
        padding:9,
        borderBottomWidth:0.2,
        borderBottomColor:'#e6e6e6',
     },
     titleText:{
        fontSize:18,
        fontWeight:'bold'
    }
})


export default Content
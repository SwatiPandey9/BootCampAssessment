import React, { Component } from 'react'
import { FlatList, Text, View, SafeAreaView, Dimensions, Button, StyleSheet } from 'react-native'
import { Data } from '../utils'

const {height, width}  = Dimensions.get('window')

class Content extends Component {

    indexList = ({item, i}) => {
        return(
            <View key={i} style={styles.indexContainer}>
                <Text style={styles.titleText}>{item.id}  {item.title}</Text>
                <Button 
                title={item.name}
                onPress={() => this.props.navigation.navigate(`${item.name}`)}
                />
            </View>
        )
    }

    render() {
        return (
            <SafeAreaView style={styles.conatiner}>
                <FlatList 
                 data={Data}
                 renderItem={this.indexList}
                />
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    conatiner:{
        flex:1
    },
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
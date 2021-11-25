

import React, { Component } from 'react'
import { FlatList, Text, View, SafeAreaView } from 'react-native'

export default class InterviewQue extends Component {

    state = {
        apiData : []
    }

    componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())

      .then(data => this.setState({apiData : data}))
      .catch(error => console.log(error));
    }

    renderApiData = ({item, i}) => {
        return (
          <View key={i}>
            <Child title = {item.title} body = {item.body} />
          </View>
        );
      };

    render() {
        return (
            <SafeAreaView style={{backgroundColor:'yellow', flex:1}}>

                {/* <Text>swati</Text> */}
                <View style={{backgroundColor:'red', flex:1}}>
                    <Text>hello</Text>
                </View>
            {/* <FlatList
              data = {this.state.apiData}
              renderItem = {this.renderApiData}
            /> */}
            </SafeAreaView>
        )
    }
}

class Child extends Component {
    render(){
        return(
            <View>
                <Text>{this.props.title}</Text>
                <Text>{this.props.body}</Text>
            </View>
        )
    }
    
}
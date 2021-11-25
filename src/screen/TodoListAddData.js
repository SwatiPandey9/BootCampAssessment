import React, { Component } from 'react'
import { Text, TextInput, View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import {Colors} from '../utils/index'

const {height, width} = Dimensions.get('window')

class TodoListAddData extends Component {
    obj = this.props.route.params
    state = {
        title: this.obj.title,
        body: this.obj.title,
        index: this.obj.id
        
    }

    changeTitle = (text) => {
        this.setState({
            title: text
        })
    }

    changeBody = (text) => {
        this.setState({
            body: text
        })
    }

    saveData = (title, body, id ) => {
        // this.props.addingtitle(title)
        if (this.obj.title == ''){
        this.props.addingData(title, body, id)}
        else{
            this.props.updateData(title, body, id)
        }
        // console.log('....')
    }

    render() {
       
        return (
            <View>
                <Text> textInComponent </Text>
                <TextInput 
                    placeholder='Enter Title'
                    value={this.state.title}
                    onChangeText={text => this.changeTitle(text)}
                    style={styles.titleContainer}
                />
                <TextInput 
                    placeholder='Enter Body'
                    value={this.state.body}
                    onChangeText={text => this.changeBody(text)}
                    style={styles.titleContainer}
                />
                {/* <Text>{this.state.title}</Text> */}
                <TouchableOpacity onPress={() => this.saveData(this.state.title, this.state.body, this.state.index)}>
                    <Text>
                        Save
                    </Text>
                    {/* <Text>{this.props.value}</Text> */}
                    {/* <Text>{this.props.title}</Text> */}
                    {/* <Text>{this.props.datalist}</Text> */}
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    titleContainer:{
        backgroundColor: Colors.textBackgroundColor,
        height:  height * 0.1,
        width: width * 0.9,
        borderRadius: height / 30,
        
    }
})

const mapStateToProps = state => {
    return {value: state.Todo.todoListData, title: state.Todo.title};
  };

const mapDispatchToPops = dispatch => {
    return {
        // addingtitle: data => dispatch({type: 'UPDATE_TITLE', payload: data}),
        addingData: (title, body) => dispatch({type: 'ADD_DATA', payload: {title, body}}),
        updateData: (title, body, id) => dispatch({type: 'UPDATE_DATA', payload:{title, body, id}})
    }
}

export default connect(mapStateToProps, mapDispatchToPops)(TodoListAddData);
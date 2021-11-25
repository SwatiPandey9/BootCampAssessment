import React, {Component} from 'react';
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {connect} from 'react-redux';
import {Styles} from '../utils';

const {height, wieght} = Dimensions.get('window');

class TodoListHomeScreen extends Component {
  delete = i => {
    console.log(i);
    this.props.deleteData(i);
  };

  displayTodoData = rowData => {
    const {item, index} = rowData;
    return (
      <View style={styles.todoContainer}>
        <Text style={{color: 'white'}}>{item.title}</Text>
        <Text style={{color: 'white'}}>{item.body}</Text>
        <Text>{index}</Text>
        <TouchableOpacity onPress={() => this.delete(index)}>
          <Text>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    // console.log('..........///////')
    // console.log(this.props.todoData)
    return (
      <View>
        {/* <View>
            
          {this.props.todoData.map((item, index) => (
        <View key={index} style={styles.todoContainer}>
            <View>
              <Text>{item.title}</Text>
              <Text>{item.body}</Text>
              <Text>{index}</Text>
           </View>
            
              <TouchableOpacity onPress={() => this.delete(index)}>
                <Text>Delete</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('TodoListAddData', {
                  id: index,
                  title: item.title,
                  body: item.body
              })}>
                <Text>Update</Text>
              </TouchableOpacity>
            
        </View>
            
          ))}
        </View> */}

        <FlatList
          //   data={[...Array(5)]}
          data={this.props.todoData}
          renderItem={this.displayTodoData}
          keyExtractor={(item, i) => i.toString()}
        />
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('TodoListAddData', {
              id: '',
              title: '',
              body: '',
            })
          }>
          <Text>Add Data</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  todoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: 'green',
    margin: 10,
    paddingVertical: 20,
    borderRadius: 20,
  },
});

const mapStateToProps = state => {
  return {
    todoData: state.Todo.todoListData,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteData: data => dispatch({type: 'DELETE_DATA', payload: data}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoListHomeScreen);

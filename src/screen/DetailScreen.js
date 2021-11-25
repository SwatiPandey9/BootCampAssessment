import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import {connect} from 'react-redux';
import {updateObjectAction} from '../redux/actions/ProductDetailAction';
import {Colors, Styles} from '../utils';

const {height, width} = Dimensions.get('window');

class DetailScreen extends Component {
  // constructor(props) {
  //   super();
  //   const {item} = props.route.params;
  //   this.state = {
  //     object: item,
  //     title: item.title,
  //     body: item.body,
  //     id: item.id,
  //   };
  // }
  item = this.props.route.params.item;

  state = {
    title: this.item.title,
    body: this.item.body,
    id: this.item.id,
  };

  changeTitle = text => {
    this.setState({title: text});
  };

  changeBody = text => {
    this.setState({body: text});
  };

  getObject = () => {
    this.props.objectUpdate(this.state.title, this.state.id, this.state.body);
    this.props.navigation.navigate('HomeScreen');
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.headingText}>Make Changes</Text>
        <Text style={styles.text}>Change Title Below</Text>
        <TextInput
          placeholder="Edit title"
          value={this.state.title}
          onChangeText={text => {
            this.changeTitle(text);
          }}
          style={styles.titleText}
          multiline={true}
        />
        <Text style={styles.text}>Change Body Text Below</Text>

        <TextInput
          placeholder="Edit Body"
          value={this.state.body}
          onChangeText={text => {
            this.changeBody(text);
          }}
          style={styles.bodyText}
          multiline={true}
        />

        <TouchableOpacity onPress={this.getObject} style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save Data</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.bodyBackgroundColor,
    flex: 1,
  },
  headingText: {
    color: Colors.titleColor,
    textAlign: 'center',
    fontSize: height / 50,
    fontWeight: 'bold',
    padding: 10,
    width: width * 0.8,
    alignSelf: 'center',
    marginVertical: height / 30,
  },
  text: {
    marginLeft: width * 0.1,
    marginBottom: height / 45,
    fontSize: height / 40,

    color: Colors.titleColor,
  },
  titleText: {
    backgroundColor: Colors.textBackgroundColor,
    padding: 10,
    marginBottom: height / 45,
    color: Colors.titleColor,
    alignSelf: 'center',
    fontSize: Styles.primaryTextSize,
    height: height * 0.1,
    width: width * 0.9,
    borderRadius: height / 30,
  },
  bodyText: {
    backgroundColor: Colors.textBackgroundColor,
    color: Colors.bodyColor,
    alignSelf: 'center',
    padding: height / 60,
    fontSize: Styles.primaryTextSize,
    height: height * 0.2,
    width: width * 0.9,
    borderRadius: height / 30,
  },
  saveButton: {
    backgroundColor: Colors.titleColor,
    padding: 10,
    width: width * 0.3,
    alignSelf: 'center',
    borderRadius: height / 20,
    marginTop: height / 20,
  },
  saveButtonText: {
    fontSize: Styles.primaryTextSize,
    color: Colors.textBackgroundColor,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    updateTitle: data => dispatch({type: 'UPDATE_TITLE', payload: data}),
    objectUpdate: (title, id, body) =>
      dispatch(updateObjectAction(title, id, body, dispatch)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailScreen);

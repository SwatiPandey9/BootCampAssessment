import React, {Component} from 'react';
import {Text, View, FlatList, StyleSheet, Dimensions} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {uploadDataAction} from '../redux/actions/ProductDetailAction';
import {Colors, Styles} from '../utils';

const {height, width} = Dimensions.get('window');

class HomeScreen extends Component {
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())

      .then(data => this.props.updateData(data))
      .catch(error => console.log(error));
  }

  renderApiData = ({item, i}) => {
    return (
      <View key={i} style={styles.container}>
        <View style={styles.innerContainer}>
          <Text style={styles.titleText}>{`${item.title}`}</Text>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate('DetailScreen', {item})
            }>
            <Text style={styles.buttonTitle}>Edit</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.bodyText}>{item.body}</Text>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <FlatList data={this.props.data} renderItem={this.renderApiData} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.bodyBackgroundColor,
  },
  container: {
    backgroundColor: Colors.textBackgroundColor,
    marginBottom: height / 45,
    padding: height / 40,
    borderRadius: height / 30,
    marginHorizontal: 15,
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: Styles.primaryTextSize,
    marginBottom: height / 45,
    color: Colors.titleColor,
    width: width - 120,
  },
  bodyText: {
    fontSize: Styles.bodyTextSize,
    color: Colors.bodyColor,
  },
  buttonTitle: {
    fontSize: Styles.primaryTextSize,
    color: Colors.buttonColor,
  },
});

const mapStateToProps = state => {
  return {name: state.productDetail.name, data: state.productDetail.apiData};
};

const mapDispatchToProps = dispatch => {
  return {
    updateName: name => dispatch({type: 'UPDATE_NAME', payload: name}),
    updateData: data => dispatch(uploadDataAction(data, dispatch)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

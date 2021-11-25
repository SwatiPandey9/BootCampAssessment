import React, {Component} from 'react';
import {
  FlatList,
  Image,
  Text,
  View,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {getUserData} from '../redux/action/UserDetailAction';

const {height, width} = Dimensions.get('window');

class UserDetail extends Component {
  componentDidMount() {
    this.props.fetchUserData();
  }

  renderUserData = rowData => {
    const {item, index} = rowData;
    return (
      <View style={styles.userInfoiew}>
        <TouchableOpacity onPress={() => {this.props.navigation.navigate('UserProfile', {item, index: index})}} onLongPress={() => this.props.deleteUser(index)}>
          <Image source={{uri: `${item.avatar}`}} style={styles.userImage} />
          <Text style={styles.textName}>
            {item.first_name} {'\n'} {item.last_name}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    return (
      <SafeAreaView style={styles.mainContainer}>
        <View style={styles.container}>
          <FlatList
            data={this.props.data}
            renderItem={this.renderUserData}
            keyExtractor={(item, index) => index}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#000000',
  },
  container: {
    backgroundColor: '#fff',
  },
  userInfoiew: {
    backgroundColor: '#f2f2f2',
    margin: height / 50,
    padding: height / 50,
  },
  userImage: {
    height: height / 10,
    width: height / 10,
    borderRadius: 50,
    alignSelf: 'center',
  },
  textName: {
    fontSize: height / 50,
    textAlign: 'center',
  },
});

const mapStateToProps = state => {
  return {
    data: state.UserDetail.userDataArray,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUserData: () => getUserData(dispatch),
    deleteUser: (id) => dispatch({type: 'DELETE_USER', payload: id})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDetail);

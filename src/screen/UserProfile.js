import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import CustomTextInput from '../components/CustomTextInput';
import {Colors} from '../utils';

const {height, width} = Dimensions.get('window');

class UserProfile extends Component {
  item = this.props.route.params.item;
  index = this.props.route.params.index
  state = {
    firstName: this.item.first_name,
    lastName: this.item.last_name,
    email: this.item.email,
    username: '',
  };

  componentDidMount(){
      console.log(this.index);
  }

  changeFirstName = text => {
    this.setState({
      firstName: text,
    });
  };
  changeLastName = text => {
    this.setState({
      lastName: text,
    });
  };
  changeEmail = text => {
    this.setState({
      email: text,
    });
  };
  changeUsername = text => {
    this.setState({
      username: text,
    });
  };

  saveUserDetail = () => {
    this.props.saveUserDetail(
        this.index,
      this.state.firstName,
      this.state.lastName,
      this.state.email,
      this.state.username,
      
    );
    this.props.navigation.navigate('UserDetail')
  };

  render() {
    return (
      <SafeAreaView style={styles.mainContainer}>
        <View style={styles.container}>
          <Text style={styles.headerText}>Edit Profile</Text>

          <Image
            source={{uri: `${this.item.avatar}`}}
            style={styles.userImage}
          />
          <View style={styles.userFullName}>
            <TextInput
              placeholder="First Name"
              value={this.state.firstName}
              onChangeText={text => this.changeFirstName(text)}
              style={styles.userName}
            />
            <TextInput
              placeholder="Last Name"
              value={this.state.lastName}
              onChangeText={text => this.changeLasttName(text)}
              style={styles.userName}
            />
          </View>

          <CustomTextInput
            text="Email Adrress"
            name="Enter your email address"
            value={this.state.email}
            onChange={text => {
              this.changeEmail(text);
            }}
          />
          <CustomTextInput
            text="Username"
            name="@Username"
            value={this.state.username}
            onChange={text => {
              this.changeUsername(text);
            }}
          />

          <TouchableOpacity
            style={styles.saveButton}
            onPress={() => {
              this.saveUserDetail()
            }}>
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignSelf: 'center',
  },
  container: {
    backgroundColor: '#fff',
    width: width * 0.95,
    height: height,
    borderRadius: height / 30,
  },
  headerText: {
    textAlign: 'center',
    fontSize: height / 35,
    fontWeight: '600',
    marginTop: height / 40,
  },
  userImage: {
    height: height / 7,
    width: height / 7,
    alignSelf: 'center',
    borderRadius: 80,
    marginTop: height / 40,
    marginBottom: height / 90,
  },
  userFullName: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  userName: {
    fontSize: height / 28,
    textAlign: 'center',
    fontWeight: '600',
    marginRight: height / 80,
  },

  saveButton: {
    backgroundColor: '#f2f2f2',
    padding: height / 50,
    alignSelf: 'center',
    borderRadius: height / 50,
    marginTop: height / 30,
  },
  saveButtonText: {
    fontSize: height / 50,
    fontWeight: 'bold',
    
  },
});

const mapStateToProps = state => {
  return {
    data: state.UserDetail.userDataArray,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    saveUserDetail: (id, firstName, lastName, email, username) =>
      dispatch({
        type: 'UPDATE_DETAILS',
        payload: {id, firstName, lastName, email, username},
      }),
    deleteUser: id => dispatch({type: 'DELETE_USER', payload: id}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);

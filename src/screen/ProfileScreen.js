import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Dimensions,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
// import ImageBackground from 'react-native/Libraries/Image/ImageBackground'
import {Colors} from '../utils';
const {height, width} = Dimensions.get('window');

class ProfileScreen extends Component {
  object = this.props.route.params.item;
  state = {
    firstName: this.object.first_name,
    email: this.object.email,
    userName: '',
  };

  changeName = text => {
    this.setState({
      firstName: text,
    });
  };
  changeEmail = text => {
    this.setState({
      email: text,
    });
  };
  changeUsername = text => {
    this.setState({
      userName: text,
    });
  };

  render() {
    console.log(this.props.route);
    const object = this.props.route.params;
    return (
      <SafeAreaView style={styles.mainContainer}>
        <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}> Edit Profile </Text>
          </View>
          <View>
            <Image
              source={{uri: `${this.props.route.params.item.avatar}`}}
              style={styles.userImage}
            />
            <Image
              source={require('../assets/edit.png')}
              style={styles.editIcon}
            />
          </View>

          <TextInput
            placeholder="Name"
            value={this.state.firstName}
            onChangeText={text => this.changeName(text)}
            style={styles.userName}
          />
          <Text style={styles.userDesignation}>Senior Desginer</Text>

          <View style={styles.detailsContainer}>
            <Text style={styles.Text}>Email Address</Text>
            <TextInput
              placeholder="Your Email"
              value={this.state.email}
              onChangeText={text => this.changeEmail(text)}
              style={styles.Input}
            />

            <Text style={styles.Text}>Username</Text>
            <TextInput
              placeholder="@Your username"
              value={this.state.userName}
              onChangeText={text => this.changeUsername(text)}
              style={styles.Input}
            />

            <Text style={styles.Text}>Password</Text>
            <TextInput
              placeholder="Enter Password"
              secureTextEntry={true}
              style={styles.Input}
            />

            <Text style={styles.Text}>Birth Date (opional)</Text>
            <View style={styles.birthdateStyle}>
              <TextInput placeholder="Date" style={[styles.birthdateInput]} />
              <TextInput placeholder="Month" style={styles.birthdateInput} />
              <TextInput placeholder="Year" style={styles.birthdateInput} />
            </View>
          </View>

          <TouchableOpacity
            style={styles.saveButton}
            onPress={() => {
              this.props.navigation.navigate('HomeScreen');
            }}>
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>

          <View style={styles.footer}>
            <Text style={styles.footerTextJoined}>Joined</Text>
            <Text style={styles.footerTextDate}>21 Jan 20202</Text>
          </View>
        </View>
        </ScrollView>
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
   
    width: width * 0.9,
    borderRadius: height / 40,
    backgroundColor: Colors.backgroundColor,
    
  },
  headerText: {
    fontSize: height / 35,
    fontWeight: '600',
    marginVertical: height / 50,
    alignSelf: 'center',
  },
  userImage: {
    height: height/7,
    width: height/7,
    alignSelf: 'center',
    borderRadius: 80,
    marginVertical: height / 40,
  },
  editIcon: {
    height: height/35,
    width: height/35,
    position: 'absolute',
    bottom: height/40,
    right: height/6.5,
  },
  userName: {
    fontSize: height / 28,
    textAlign: 'center',
    fontWeight: '600',
  },
  userDesignation: {
    textAlign: 'center',
    fontSize: height / 50,
    color: Colors.iconColor,
  },
  detailsContainer: {
    width: width - 50,
    alignSelf: 'center',
  },
  Text: {
    fontSize: height / 50,
    marginTop: height / 30,
    marginLeft: height / 30,
    color: Colors.iconColor,
  },
  Input: {
    fontSize: height / 40,
    width: width / 1.3,
    fontWeight: 'bold',
    marginLeft: height / 30,
    borderBottomWidth: 3,
    borderBottomColor: '#f2f2f2',
    marginTop: height / 95,
  },
  birthdateStyle: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  birthdateInput: {
    fontSize: height / 40,
    width: width / 5,
    fontWeight: 'bold',
    marginLeft: height / 30,
    borderBottomWidth: 3,
    borderBottomColor: '#f2f2f2',
    marginTop: height / 90,
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
  footer: {
    flexDirection: 'row',
    marginLeft: height / 30,
    marginTop: 20,
    marginBottom: 20,
  },
  footerTextJoined: {
    marginRight: 10,
    fontSize: 18,
  },
  footerTextDate: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;

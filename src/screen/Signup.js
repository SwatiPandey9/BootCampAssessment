import React, {Component} from 'react';
import {View, StyleSheet, Dimensions, SafeAreaView} from 'react-native';
import {CustomButton, InputText, Footer, Header} from '../components';
import {setHomeData} from '../utils/CommonFunctions';
import Images from '../utils/Images';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const {height, width} = Dimensions.get('window');

class Signup extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  };

  setUserData = async () => {
    // console.log(this.state.name);
    // console.log(this.state.email);
    // console.log('data saved');
    setHomeData(this.state.name, this.state.email, this.state.phone, () => {
      this.props.navigation.navigate('Home');
    });

    // CommonFunctions.setItem('name', 'Sameer)
    // CommonFunctions.getItem('name')
  };

  nameFun = text => {
    this.setState({
      name: text,
      highlight: true,
    });
  };

  emailFun = text => {
    this.setState({email: text});
  };

  passwordFun = text => {
    this.setState({password: text});
  };

  confirmPasswordFun = text => {
    this.setState({confirmPassword: text});
  };

  phoneFun = text => {
    this.setState({phone: text});
  };

  fun1 = () => {
    console.log('Hellow this is world');
  };

  render() {
    return (
      <SafeAreaView style={styles.conatiner}>
        <KeyboardAwareScrollView
          bounces={false}
          showsVerticalScrollIndicator={false}>
          <View style={styles.innerConatiner}>
            <Header
              title="Let's Get Started"
              subTitle="Create an account to Q Allure to get all features"
            />

            {/* Custom Text Input--------------------------------------- */}

            <View style={styles.inputContainer}>
              <InputText
                name="Enter Name"
                value={this.state.name}
                changeText={text => {
                  this.nameFun(text);
                }}
                image={Images.images.person}
              />
              <InputText
                name="Email"
                value={this.state.email}
                changeText={text => {
                  this.emailFun(text);
                }}
                type="email-address"
                image={Images.images.mail}
              />
              <InputText
                name="phone"
                value={this.state.phone}
                changeText={text => {
                  this.phoneFun(text);
                }}
                type="number-pad"
                image={Images.images.phone}
              />
              <InputText
                name="Password"
                value={this.state.password}
                changeText={text => {
                  this.passwordFun(text);
                }}
                image={Images.images.lock}
                hide={true}
              />
              <InputText
                name="Confirm Password"
                value={this.state.confirmPassword}
                changeText={text => {
                  this.confirmPasswordFun(text);
                }}
                image={Images.images.lock}
                hide={true}
              />
            </View>

            {/* Custom buttons ----------------------------------------- */}

            <CustomButton
              name="Create"
              // style={{backgroundColor: 'red', marginBottom: 20}}
              onPress={() => {
                this.setUserData();
              }}
            />

            {/* Customm Footer--------------------------------------------------------------- */}

            <Footer footerText="Already have an account? " login="Login here" />
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: 'grey',
  },

  innerConatiner: {
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: '#f2f2f2',
    marginHorizontal: 15,
  },
  headingText: {
    textAlign: 'center',
    fontSize: width * 0.08,
    fontWeight: 'bold',
    marginTop: height / 7,
    marginBottom: height / 75,
  },
  subHeadingText: {
    color: 'grey',
    fontSize: 15,
  },
  inputContainer: {
    marginTop: height / 20,
  },
});

export default Signup;

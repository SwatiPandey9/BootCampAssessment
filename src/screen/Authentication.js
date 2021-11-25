import React, {Component} from 'react';
import {Text, View, SafeAreaView, Platform} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

export default class Authentication extends Component {
  state = {
    userGoogleInfo: {},
    loaded: false,
  };

  componentDidMount = () => {
    GoogleSignin.configure({
      webClientId:
        Platform.OS === 'android'
          ? '825980893262-v1g6ht2m7uspq1r6id7pbnje9ieonho8.apps.googleusercontent.com'
          : '825980893262-tn0ainh544fq8bees7acijmdk9f2po4s.apps.googleusercontent.com',
    });
  };

  signIn = async () => {
    try {
      console.log('iiiiiiii');
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      this.setState({
        userGoogleInfo: userInfo,
        loaded: true,
      });
      console.log(userInfo);
      //  alert('click')
      console.log('-----');
    } catch (error) {
      console.log(error);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('user cancelled login flow');
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
      }
    }
  };

  render() {
    return (
      <SafeAreaView>
        <Text> textInComponent </Text>
        <GoogleSigninButton
          style={{width: 192, height: 48}}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={this.signIn}
        />
      </SafeAreaView>
    );
  }
}

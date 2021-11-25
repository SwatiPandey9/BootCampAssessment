import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';

// const state = setSaveData

export const setHomeData = async (name, email, phone, callback) => {
  await AsyncStorage.setItem('userName', name);
  await AsyncStorage.setItem('userEmail', email);
  await AsyncStorage.setItem('userPhone', phone.toString());

  callback();
};

// setSaveData

export const setSaveData = async (useraddress) => {
  await AsyncStorage.setItem('address' , useraddress.toString());
  const address =  await AsyncStorage.getItem('address') 
  console.log('<><><><><><><><><><><><><><><><><><>')
  console.log(address)
  return address
  // return (
  //   <Home value = {this.state}/>
  // )
};

const fuency = navigation => {
  logout = async () => {
    const deletedData = await AsyncStorage.clear();
    console.log('data deleted');
    console.log(deletedData);
  };
  navigation.navigate('Signup');
};

// export const setData = async (key, value) => {
//   await AsyncStorage.setItem(key, JSON.stringify(value));
// };

export const UseAlert = navigation => {
  Alert.alert('Hold on', 'Do you want to logout', [
    {
      text: 'Yes',
      onPress: () => fuency(navigation),
    },
    {text: 'No', onPress: () => null},
  ]);
};

// export default {setHomeData};
// export {setHomeData, UseAlert, setData} // it is working
// export default {UseAlert}

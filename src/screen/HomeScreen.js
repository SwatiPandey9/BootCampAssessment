import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Button,
  FlatList,
  Image,
  Dimensions,
  Touchable,
  TouchableOpacity,
  SectionList,
  ScrollView,
} from 'react-native';
import {connect} from 'react-redux';
import CustomViewIcon from '../components/CustomViewIcon';
import {getData} from '../redux/action/HomeScreenAction';
import {Images, Colors} from '../utils';
// import {getApiData} from '../redux/action/HomeScreenAction';
// import {getSectionListData} from '../utils/CommonFunctions';

const {height, width} = Dimensions.get('window');

class HomeScreen extends Component {
  state = {
    listview: false,
  };

  componentDidMount() {
    this.props.fetchApi();
  }

  displayContacts = rowData => {
    const {item, index} = rowData;
    console.log('item, ite', item);
    console.log(index)

    return (
      <View style={{flex: 1}}>
        <TouchableOpacity
          onLongPress={() => {
            this.props.deleteUserInfo(item.id);
          }}
          onPress={() =>
            this.props.navigation.navigate('ProfileScreen', {item})
          }
          style={[
            styles.userInfoView,
            {flexDirection: this.state.listview ? 'row' : null},
            {width: this.state.listview ? width * 0.9 : width / 2.5},
            {justifyContent: this.state.listview ? 'flex-start' : 'center'},
            {height: this.state.listview ? height / 10 : height / 6},
          ]}>
          <View>
            <Image
              source={{uri: `${item.avatar}`}}
              style={[
                styles.userImage,
                {marginHorizontal: this.state.listview ? height / 30 : null},
              ]}
            />
          </View>
          <View>
            <Text style={styles.userName}>{item.first_name}</Text>
            <Text style={styles.userName}>{item.last_name}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.innerContainer}>
          <View style={styles.iconContainer}>
            <CustomViewIcon
              image={Images.image.list}
              onPress={() => {
                this.setState({listview: true});
              }}
            />
            <CustomViewIcon
              image={Images.image.grid}
              onPress={() => {
                this.setState({listview: false});
              }}
            />
          </View>
          <ScrollView>
            {Object.entries(this.props.data).map((item, key) => {
                console.log('item  ==> ', item[0], item[1], this.props.data);
              return (
                <View key={key}>
                  <Text style={styles.alphabet}>{item[0].toString()}</Text>
                  {this.state.listview ? (
                    <FlatList
                      data={item[1]}
                      contentContainerStyle={{width: width}}
                      numColumns={1}
                      renderItem={this.displayContacts}
                      key={'1'}
                      keyExtractor={(item, index) => index.toString()}
                    />
                  ) : (
                    <FlatList
                      data={item[1]}
                      contentContainerStyle={{width: width}}
                      numColumns={2}
                      renderItem={this.displayContacts}
                      key={'2'}
                      keyExtractor={(item, index) => index.toString()}
                    />
                  )}
                </View>
              );
            })}
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: height / 20,
    width: width,
    backgroundColor: Colors.iconBackgroundColor,
  },
  alphabet: {
    fontSize: height / 35,
    marginLeft: height / 30,
  },
  userInfoView: {
    backgroundColor: Colors.iconBackgroundColor,
    marginVertical: 15,

    alignItems: 'center',
    borderRadius: height / 50,
    marginLeft: height / 30,
  },
  userImage: {
    height: 70,
    width: 70,
    borderRadius: 60,
  },
  userName: {
    color: '#525252',
  },
});

const mapStateToProps = state => {
  return {
    data: state.HomeScreenData.arrData,
    userData: state.HomeScreenData.userData,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchApi: () => getData(dispatch),
    deleteUserInfo: index => dispatch({type: 'DELETE_DATA', payload: index}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

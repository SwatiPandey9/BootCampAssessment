import React, {Component} from 'react';
import {FlatList, Text, View, StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

class SortedData extends Component {
  dispalySortData = rawData => {
    const {item, index} = rawData;
    return (
      <View>
        <View style={styles.employeeList}>
          <Text>Emp_ID: {item._id}</Text>
          <Text>Name: {item.name}</Text>
          <Text>Designation: {item.designation}</Text>
          <Text>Salary: {item.salary}</Text>
        </View>
      </View>
    );
  };

  render() {
    return (
      <View>
        <View style={styles.sortedContainer}>
          <Text style={styles.sortedText}>Sorted Data</Text>
        </View>
        <FlatList
          data={this.props.sortedData}
          renderItem={this.dispalySortData}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sortedContainer: {
    width: width / 1.1,
    backgroundColor: '#FCF3CF',
    margin: 10,
    padding: height / 50,
  },
  sortedText: {
    textAlign: 'center',
  },
  employeeList: {
    backgroundColor: '#FCF3CF',
    margin: height / 40,
    padding: height / 50,
    borderRadius: height / 50,
  },
});

export default SortedData;

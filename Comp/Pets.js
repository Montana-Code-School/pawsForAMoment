import React from 'react';
import {  Image, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';

export default class Pets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfPets: [],
      firstImage: ""
    }
  }

  display() {
    let data = this.props.parentState.data;
    let listOfPets = [];
    for(let i = 0; i < data.length; i++) {
      listOfPets.push((
        <TouchableOpacity style={styles.petButton}>
          <Image
            source={{uri: data[i].image}}
            style={styles.petImage}
          />
          <Text style={styles.petButtonText}>{data[i].petname}</Text>
        </TouchableOpacity>
      ))
    }
    this.setState({
      listOfPets: listOfPets
    })
  }

  render() {
    return(
      <ScrollView style={styles.contentContainer}>
      <View>
        {this.state.listOfPets}
        <Text
          onPress={() => console.log(this.state.listOfPets)}>
        </Text>
      </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 20,
  },
  petButton: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 100,
    backgroundColor: '#edeeef',
    marginBottom: 10,
  },
  petButtonText: {
    paddingLeft: '5%',
    fontSize: 20,
    fontWeight: 'bold',
  },
  petImage: {
    marginLeft: 10,
    width: 80,
    height: 80,
  }
});

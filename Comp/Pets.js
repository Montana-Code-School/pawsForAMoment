import React from 'react';
import {  Image, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';

export default class Pets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfPets: [],
    }
    this.onPress = this.onPress.bind(this);
  }

onPress(e) {
}

  componentDidMount() {
    let data = this.props.parentState.data;
    let listOfPets = [];
    for(let i = 0; i < data.length; i++) {
      listOfPets.push((
        <TouchableOpacity style={styles.petButton} onPress={this.onPress} key={i}>
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
      <ScrollView>
      <View>
        {this.state.listOfPets}
        <Text
          onPress={() => console.log(this.state.listOfPets)
          }>
        </Text>
      </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  petButton: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 100,
    backgroundColor: '#edeeef',
    marginBottom: 10,
  },
  petButtonText: {
    alignItems: 'center',
    fontSize: 20,
    paddingLeft: "5%",
    fontWeight: 'bold',
  },
  petImage: {
    justifyContent: 'flex-start',
    marginLeft: 10,
    width: 80,
    height: 80,
  }
});

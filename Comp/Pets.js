import React from 'react';
import {  Image, ScrollView, StyleSheet, Text, TouchableOpacity, Transform, View } from 'react-native';

export default class Pets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heightVal: 100,
    }
  }

  onCLickTestyThing = (e) => {
    console.log(this.props.parentState.data[0]);
    this.setState({heightVal: 200});
  }

  render() {
    let data = this.props.parentState.data;
    let listOfPets = [];
    for(let i = 0; i < data.length; i++) {
      listOfPets.push((
        <TouchableOpacity
          style={[styles.petButton, {height:this.state.heightVal}]}
          key={i}
          onPress={this.onCLickTestyThing}>
          <Image
            source={{uri: data[i].image}}
            style={styles.petImage}
          />
          <Text
            style={styles.petButtonText}>
            {data[i].petname}
          </Text>
        </TouchableOpacity>
      ))
    }
    return(
      <ScrollView style={styles.contentContainer}>
      <View style={{paddingBottom:100}}>
        {listOfPets}
      </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 20,
    flex: 0,
  },
  petButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    height: 100,
    backgroundColor: '#edeeef',
    marginBottom: 10,
    alignItems: 'center',
    // paddingBottom: 200,
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
    transform: [{scaleY: 1}],
  }
});

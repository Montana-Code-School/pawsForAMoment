import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';

export default class LandingPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      header: 'Login'
    }
  }

  findPets(e) {
    fetch('http://localhost:5000/pets')
    .then((res) => {
     return res.json();
    })
    .then((data) => {
      let promise = new Promise((res, rej) => {
        this.props.changeState({data: data});
        res();
      })
      promise.then(() => {
        this.props.changeState({display: "Pets"});
      })
    })
  }

  render() {
    return(
      <View>
        <Text>Find a Friend</Text>
        <Button onPress={(e) => this.findPets(e)} title = 'Find pets!'/>
      </View>
    )
  }
}

import React from 'react';
import { Button, StyleSheet, Text, View, } from 'react-native';

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
        this.props.changeState({display: 'Pets'});
      })
    })
  }

  render() {
    return(
      <View style = {styles.container}>
        <Button
          onPress={(e) => this.findPets(e)}
          title='Find pets!'
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
});

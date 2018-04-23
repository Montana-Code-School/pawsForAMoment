import React from 'react';
import { Button, StyleSheet, Text, View, } from 'react-native';

export default class LandingPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      header: 'Login'
    }
  }

  componentDidMount() {
    if(this.props.parentState.isLogged == true) {
      fetch('http://localhost:5000/displayPets/' + this.props.parentState.username)
      .then((res) => {
        return res.json();
      })
      .then((pets) => {
        this.props.changeState({
          userData: pets,
        })
      })
    }
  }

  findPets(e) {
    let promise = new Promise((res, rej) => {
      fetch('http://localhost:5000/pets')
      .then((res) => {
       return res.json();
      })
      .then((data) => {
        this.props.changeState({
          data: data
        });
        res();
      })
    })
    promise.then(() => {
      this.props.changeState({display: 'Pets'});
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
    alignItems: 'flex-start',
    marginTop: 100,
  },
});

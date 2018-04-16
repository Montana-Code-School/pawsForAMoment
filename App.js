import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, Button, TouchableOpacity, YellowBox } from 'react-native';
import LandingPage from './Comp/LandingPage.js';
import Login from './Comp/Login.js';
import MyPage from './Comp/MyPage.js';
import CreateUser from './Comp/CreateUser.js';
import NavBar from './Comp/NavBar.js';
import Pets from './Comp/Pets.js';


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      display: 'LandingPage',
      isLogged: false,
      username: "",
      data: [],
    }
    this.changeState = this.changeState.bind(this);
  }

  changeState(obj){
    this.setState(obj);
  }



  render() {
    switch(this.state.display) {
      case 'LandingPage':
        return (
          <View style={styles.container}>
            <NavBar changeState = {this.changeState} parentState = {this.state} />
            <LandingPage changeState = {this.changeState} parentState = {this.state} />
          </View>
        );
        break;
      case 'Login':
        return (
          <View style={styles.container}>
            <NavBar changeState = {this.changeState} parentState = {this.state} />
            <Login changeState = {this.changeState} parentState = {this.state} />
          </View>
        );
        break;
      case 'CreateUser':
        return (
          <View style={styles.container}>
            <CreateUser changeState = {this.changeState} parentState = {this.state} />
          </View>
        );
        break;
      case 'MyPage':
        return (
          <View style={styles.container}>
            <NavBar changeState = {this.changeState} parentState = {this.state} />
            <MyPage changeState = {this.changeState} parentState = {this.state} />
          </View>
        );
        break;
      case 'Pets':
        return (
          <View style={styles.container}>
            <NavBar changeState = {this.changeState} parentState = {this.state} />
            <Pets changeState = {this.changeState} parentState = {this.state} />
          </View>
        );
        break;
      default:
        return (
          <View style={styles.container}>
            <NavBar changeState = {this.changeState} parentState = {this.state} />
            <LandingPage changeState = {this.changeState} parentState = {this.state} />
          </View>
        );
      }
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center'
  },
});

console.disableYellowBox = true;

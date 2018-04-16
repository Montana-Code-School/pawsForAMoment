import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, Button, TouchableOpacity, YellowBox } from 'react-native';
import LandingPage from './Comp/LandingPage.js';
import Login from './Comp/Login.js';
import MyPage from './Comp/MyPage.js';
import CreateUser from './Comp/CreateUser.js';
import NavBar from './Comp/NavBar.js';


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      display: 'LandingPage',
      isLogged: false,
      username: "",
    }
    this.changeDisplay = this.changeDisplay.bind(this);
    this.userAuth = this.userAuth.bind(this);
  }
  changeDisplay(key, value){
    let obj = {};
    obj[key] = value;
    this.setState(obj);
  }
  userAuth(status){
    this.setState({isLogged: status});
  }

  render() {
    console.log(this.state.display);
    if (this.state.display == 'LandingPage'){
      return (
        <View style={styles.container}>
          <NavBar userAuth = {this.userAuth} changeDisplay = {this.changeDisplay} isLogged = {this.state.isLogged} />
          <LandingPage changeDisplay = {this.changeDisplay} isLogged = {this.state.isLogged} />
        </View>
      );
    }else if (this.state.display == 'Login'){
      return (
        <View style={styles.container}>
          <NavBar changeDisplay = {this.changeDisplay} isLogged = {this.state.isLogged} />
          <Login changeDisplay = {this.changeDisplay} userAuth = {this.userAuth} />
        </View>
      );
    }else if (this.state.display == 'CreateUser'){
      return (
        <View style={styles.container}>
          <CreateUser />
        </View>
      );
    }else if (this.state.display == 'MyPage'){
      return (
        <View style={styles.container}>
          <NavBar changeDisplay = {this.changeDisplay} isLogged = {this.state.isLogged} />
          <MyPage />
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

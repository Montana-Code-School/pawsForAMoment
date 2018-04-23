import React from 'react';
import PropTypes from 'prop-types';
import { Image, StyleSheet, View, YellowBox } from 'react-native';
import CreateUser from './Comp/CreateUser.js';
import EnterPets from './Comp/EnterPets.js';
import LandingPage from './Comp/LandingPage.js';
import Login from './Comp/Login.js';
import MyPets from './Comp/MyPets.js';
import NavBar from './Comp/NavBar.js';
import Pets from './Comp/Pets.js';
import Test from './Comp/Test.js';
import pawsLogo from './Images/pawsLogo.jpg';


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      display: 'LandingPage',
      isLogged: true,
      // ^^ change to false for production, only true for testing porpoises
      username: '',
      data: [],
    }
    this.changeState = this.changeState.bind(this);
    this.stackNavigator = this.stackNavigator.bind(this);
  }

  changeState(obj){
    this.setState(obj);
  }

  stackNavigator() {
    switch(this.state.display) {
      case 'LandingPage':
      return(
        <LandingPage
          changeState={this.changeState}
          parentState={this.state}
        />
      )
        break;
      case 'EnterPets':
      return(
        <EnterPets
          changeState={this.changeState}
          parentState={this.state}
        />
      )
        break;
      case 'Login':
      return(
        <Login
          changeState={this.changeState}
          parentState={this.state}
        />
      )
        break;
      case 'CreateUser':
      return(
        <CreateUser
          changeState={this.changeState}
          parentState={this.state}
        />
      )
        break;
      case 'MyPets':
      return(
        <MyPets
          changeState={this.changeState}
          parentState={this.state}
        />
      )
        break;
      case 'Pets':
      return(
        <Pets
          changeState={this.changeState}
          parentState={this.state}
        />
      )
        break;
      case 'Test':
      return(
        <Test
          changeState={this.changeState}
          parentState={this.state}
        />
      )
        break;
      default:
      return(
        <LandingPage
          changeState={this.changeState}
          parentState={this.state}
        />
      )
        break;
    }
  }

  render() {
    return (
      <View style={styles.container}>
         <NavBar
           changeState={this.changeState}
           parentState={this.state}
         />
         <Image
           source={pawsLogo}
           style={styles.image}
         />
        {this.stackNavigator()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    alignSelf: 'center',
    height: 65,
    width: 350,
    resizeMode: Image.resizeMode.contain,
  },

});

console.disableYellowBox = true;

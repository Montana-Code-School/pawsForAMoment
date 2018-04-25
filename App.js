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
import pawsLogo from './Images/greenPawsLogo.jpg';
import mountains from './Images/pawsMountains.jpg';


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      display: 'LandingPage',
      isLogged: false,
      username: '',
      data: [],
      userData: [],
    }
    this.changeState = this.changeState.bind(this);
    this.stackNavigator = this.stackNavigator.bind(this);
  }

  changeState(obj){
    this.setState(obj);
  }

  // Function to create navigation stack of different app pages
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
           style={styles.imageLogo}
         />
        {this.stackNavigator()}
        <Image
          source={mountains}
          style={styles.imageMtn}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c0f2dc',
  },
  imageLogo: {
    alignSelf: 'center',
    height: 65,
    width: 350,
    resizeMode: Image.resizeMode.contain,
  },
  imageMtn: {
    alignSelf: 'center',
    justifyContent: 'flex-end',
    position: 'absolute',
    top: 525,
    zIndex: -1,
    height: 150,
    width: 390,
    margin: 0,
    resizeMode: Image.resizeMode.contain,
  }
});

console.disableYellowBox = true;

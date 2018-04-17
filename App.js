import React from 'react';
import PropTypes from 'prop-types';
import { Image, StyleSheet, View, YellowBox } from 'react-native';
import CreateUser from './Comp/CreateUser.js';
import LandingPage from './Comp/LandingPage.js';
import Login from './Comp/Login.js';
import MyPage from './Comp/MyPage.js';
import NavBar from './Comp/NavBar.js';
import Pets from './Comp/Pets.js';
import EnterPets from './Comp/EnterPets.js';
import pawsLogo from './Images/pawsLogo.jpg';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      display: 'LandingPage',
      isLogged: false,
      username: '',
      data: [],
      montserrat: '',
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
            <NavBar
              changeState={this.changeState}
              parentState={this.state}
            />
            <Image
              source={pawsLogo}
              style={styles.image}
            />
            <LandingPage
              changeState={this.changeState}
              parentState={this.state}
            />
          </View>
        );
        break;
      case 'Login':
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
            <Login
              changeState={this.changeState}
              parentState={this.state}
            />
          </View>
        );
        break;
      case 'CreateUser':
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
            <CreateUser
              changeState={this.changeState}
              parentState={this.state}
            />
          </View>
        );
        break;
      case 'MyPage':
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
            <MyPage
              changeState={this.changeState}
              parentState={this.state}
            />
          </View>
        );
        break;
      case 'Pets':
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
            <Pets
              changeState={this.changeState}
              parentState={this.state}
            />
          </View>
        );
        break;
      case 'EnterPets':
        return (
          <View style={styles.container}>
            <NavBar changeState = {this.changeState} parentState = {this.state} />
            <EnterPets changeState = {this.changeState} parentState = {this.state} />
          </View>
        )
      default:
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
            <LandingPage
              changeState={this.changeState}
              parentState={this.state}
            />
          </View>
        );
    }
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

//   stackNavigator() {
//     switch(this.state.display) {
//       case 'LandingPage':
//         <LandingPage
//           changeState={this.changeState}
//           parentState={this.state}
//         />
//         break;
//       case 'Login':
//         <Login
//           changeState={this.changeState}
//           parentState={this.state}
//         />
//         break;
//       case 'CreateUser':
//         <CreateUser
//           changeState={this.changeState}
//           parentState={this.state}
//         />
//         break;
//       case 'MyPage':
//         <MyPage
//           changeState={this.changeState}
//           parentState={this.state}
//         />
//         break;
//       case 'Pets':
//         <Pets
//           changeState={this.changeState}
//           parentState={this.state}
//         />
//         break;
//       default:
//         <LandingPage
//           changeState={this.changeState}
//           parentState={this.state}
//         />
//         break;
//     }
//   }
//
//   render() {
//     return (
//       <View style={styles.container}>
//          <NavBar
//            changeState={this.changeState}
//            parentState={this.state}
//          />
//          <Image
//            source={pawsLogo}
//            style={styles.image}
//          />
//         {this.stackNavigator()}
//       </View>
//     )
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   image: {
//     alignSelf: 'center',
//     height: 65,
//     width: 350,
//     resizeMode: Image.resizeMode.contain,
//   },
// });
//
// console.disableYellowBox = true;

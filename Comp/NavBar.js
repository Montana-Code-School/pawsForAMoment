import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      header: 'Login'
    }
  }

  render() {
    if(this.props.parentState.isLogged == false){
      return(
        <View >
          <TouchableOpacity onPress = {() => this.props.changeState({display: 'Login'})}>
            <Text style ={{color:'blue'}}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress = {() => this.props.changeState({display: 'LandingPage'})}>
            <Text style ={{color:'blue'}}>Home</Text>
          </TouchableOpacity>
        </View>
      )
    } else if (this.props.parentState.isLogged == true){
      return(
        <View>
          <Button onPress = {() => {
              this.props.changeState({isLogged: false, display: 'Login'});
            }}
            title = 'Logout'
            />
          <Button onPress = {() => this.props.changeState({display: 'LandingPage'})} title = 'Home' />
        </View>
      )
    }
  }
}
// const styles = StyleSheet.create({
//   navBar: {
//     flex: 1,
//     flexDirection: 'row',
//   },
//   button: {
//     paddingBottom: '1%'
//   }
// });

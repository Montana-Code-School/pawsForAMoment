import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    console.log(this.props);
    return(
      <View style={styles.container}>
        <TouchableOpacity
          onPress={()=>{this.props.navigation.navigate('Login')}}
          style={styles.loginButton}
        >
          <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress = {()=>{this.props.navigation.navigate('LandingPage')}}
          style={styles.landingPageButton}
        >
          <Text>Home</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: '#d142f4',
    justifyContent: 'flex-end',
  },
  loginButton: {
    display: 'flex',
    alignSelf: 'flex-end',
    paddingRight: 20,
  },
  landingPageButton: {
    display: 'flex',
    alignSelf: 'flex-start',
    paddingLeft: 20,
    paddingBottom: 20,
  }
});

import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import NavBar from './NavBar';

export default class LandingPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return(
      <View>
        <NavBar navigation={this.props.navigation}/>
        <Text>Find a Friend</Text>
      </View>
    )
  }
}

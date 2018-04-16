import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';

export default class LandingPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      header: 'Login'
    }
  }

  render() {
    return(
      <View>
        <Text onPress = {() => console.log(this.props.isLogged)}>Find a Friend</Text>
      </View>
    )
  }
}

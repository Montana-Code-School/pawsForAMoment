import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import NavBar from './NavBar.js';

export default class MyPage extends React.Component {
  render() {
    const { params } = this.props.navigation.state;
    const username = params ? params.username : null;

    return(
      <View>
      <NavBar navigation={this.props.navigation}/>
        <Text>Welcome back, {username}!</Text>
      </View>
    )
  }
}

import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class MyPage extends React.Component {
  render() {
    const { params } = this.props.navigation.state;
    const username = params ? params.username : null;

    return(
      <View>
        <Text>Welcome back, {username}!</Text>
      </View>
    )
  }
}

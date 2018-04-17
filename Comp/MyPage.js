import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class MyPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return(
      <View>
        <Text>Welcome back, {this.props.parentState.username}!</Text>
      </View>
    )
  }
}

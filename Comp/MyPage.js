import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class MyPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLogged: false,
    }
  }

  render() {

    return(
      <View>
        <Text onPress={() => console.log(this.state.isLogged)}>Welcome back, person!</Text>
      </View>
    )
  }
}

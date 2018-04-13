import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class MyPage extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'PawsForAMoment',
      headerRight: (
        <View>
        <Button
          onPress = {() => navigation.navigate('Login')}
          title = 'Login'/>
        <Button
          onPress = {() => navigation.navigate('LandingPage')}
          title = 'Home'/>
        </View>
      ),
      headerStyle: {
        backgroundColor: "#42dcf4"
      },
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  }

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

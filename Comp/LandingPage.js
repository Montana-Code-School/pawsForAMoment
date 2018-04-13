import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class LandingPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

    static navigationOptions = ({ navigation }) => {
      return {
        headerTitle: 'PawsForAMoment',
        headerRight: (
          <Button
            onPress = {() => navigation.navigate('Login')}
            title = 'Login'/>        
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
    return(
      <View>
        <Text>Find a Friend</Text>
      </View>
    )
  }
}

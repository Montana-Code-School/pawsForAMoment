import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class CreateUser extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      checkPassword: '',
      message: '',
    }
  }

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

  meow(e) {
    e.preventDefault();
    if(this.state.password === this.state.checkPassword) {
      fetch('http://localhost:5000/createUser/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password
        })
      })
      .then((res) => {
        if(res.status != 401) {
          this.props.navigation.navigate('Login');
        } else {
          this.setState({message:"User already exists!"})
        }
        return res;
      })
      .catch((err) => {
        console.log(err)
        return err;
      })
      // this.props.navigation.navigate('Login');
    } else {
      this.setState({
        message:"Password doesn't match!"
      })
    }
  }

  render() {
    return(
      <View>
      <Text>Username: </Text>
      <TextInput
        onChangeText={(username) => this.setState({username: username})}
        value={this.state.username}
        autoCapitalize = 'none'
        placeholder = 'Enter here'

      />
      <Text>Password: </Text>
      <TextInput
        onChangeText={(password) => this.setState({password: password})}
        value={this.state.password}
        autoCapitalize = 'none'
        placeholder = 'Enter here'

      />
      <Text>Confirm Password: </Text>
      <TextInput
        onChangeText={(password) => this.setState({checkPassword: password})}
        value={this.state.checkPassword}
        autoCapitalize = 'none'
        placeholder = 'Enter here'

      />
      <Button
        title="Submit"
        onPress={(e) => this.meow(e)}
      />
      <Text>{this.state.message}</Text>
      </View>
    )
  }
}

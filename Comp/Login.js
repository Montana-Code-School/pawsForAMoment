import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';

export default class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      message: '',
      isLogged: false,
    }
  }

  bark(e) {
    fetch('http://localhost:5000/userAuth', {
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
        this.props.userAuth(true);
        this.props.changeDisplay('MyPage');
      } else {
        this.setState({
          message: 'Incorrect user information!'
        })
      }
      return res;
    })
    .catch((err) => {
      console.log(err)
      return err;
    })
  }

  render() {
    return(
      <View>
        <Text>Username:</Text>
        <TextInput
          onChangeText={(username) => this.setState({username: username})}
          value={this.state.username}
          placeholder = 'Enter here'
          autoCapitalize = 'none'
        />
        <Text>Password: </Text>
        <TextInput
          onChangeText={(password) => this.setState({password: password})}
          value={this.state.password}
          placeholder = 'Enter here'
          autoCapitalize = 'none'
        />
        <Text>{this.state.message}
        </Text>
        <Button
          title="Submit"
          onPress={(e) => this.bark(e)}
        />
        <Text>Don't have an account? Make one </Text>
        <Button
          title="here!"
          onPress = {()=> console.log('sad')}
        />
      </View>
    )
  }
}

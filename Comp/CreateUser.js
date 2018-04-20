import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

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

  createUser(e) {
    e.preventDefault();
    if(this.state.password === this.state.checkPassword) {
      fetch('http://localhost:5000/createUser', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password,
        })
      })
      .then((res) => {
        if(res.status != 401) {
          this.props.changeState({
            display: 'MyPage',
            isLogged: true,
            username: this.state.username,
          })
        } else {
          this.setState({
            message: 'User already exists!'
          })
        }
        return res;
      })
      .catch((err) => {
        console.log(err)
        return err;
      })
    } else {
      this.setState({
        message: 'Password doesn\'t match!'
      })
    }
  }

  render() {
    return(
      <View>
        <Text>Username: </Text>
        <TextInput
          onChangeText={(username) => this.setState({username: username})}
          value={this.state.username.split(" ").join("")}
          autoCapitalize='none'
          placeholder='Enter here'
        />
        <Text>Password: </Text>
        <TextInput
          onChangeText={(password) => this.setState({password: password})}
          value={this.state.password.split(" ").join("")}
          autoCapitalize='none'
          placeholder='Enter here'
        />
        <Text>Confirm Password: </Text>
        <TextInput
          onChangeText={(password) => this.setState({checkPassword: password})}
          value={this.state.checkPassword.split(" ").join("")}
          autoCapitalize='none'
          placeholder='Enter here'
        />
        <Button
          onPress={(e) => this.createUser(e)}
          title='Submit'
        />
        <Text>{this.state.message}</Text>
      </View>
    )
  }
}

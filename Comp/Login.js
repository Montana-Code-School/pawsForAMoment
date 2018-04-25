import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      message: '',
    }
  }

  // Function to check whether username/password exist in database, redirects to
  // landing page if check goes through
  login(e) {
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
        this.props.changeState({
          isLogged: true,
          display: 'LandingPage',
          username: this.state.username,
        });
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
      <View style={styles.container}>
        <Text style={styles.textInput}>Username: </Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(username) => this.setState({username: username})}
          value={this.state.username.split(' ').join('').trim()}
          placeholder='Enter here'
          autoCapitalize='none'
        />
        <Text style={styles.textInput}>Password: </Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(password) => this.setState({password: password})}
          value={this.state.password.split(' ').join('').trim()}
          placeholder='Enter here'
          autoCapitalize='none'
          secureTextEntry={true}
        />
        <Text>{this.state.message}</Text>
        <Button
          onPress={(e) => this.login(e)}
          title='Submit'
        />
        <View style={{flexDirection:'row'}}>
          <Text style={{fontSize: 17}}>Don't have an account? Make one </Text>
          <Text
            style={{color:'#007AFF', fontWeight: 'bold', fontSize: 17}}
            onPress={()=> this.props.changeState({display: 'CreateUser'})}>
            here!
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 200,
  },
  textInput: {
    fontSize: 20
  }
})

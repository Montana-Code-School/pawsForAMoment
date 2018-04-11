import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Login from './Comp/Login.js';
import MyPage from './Comp/MyPage.js';
import CreateUser from './Comp/CreateUser.js';

const RootStack =
  StackNavigator({
    Login: {
      name: "Login",
      screen: Login,
    },
    MyPage: {
      name: "MyPage",
      screen: MyPage,
    },
    CreateUser: {
      name: "CreateUser",
      screen: CreateUser,
    },
  },
  {initialRouteName: 'Login'}
)

export default class App extends React.Component {
  //this.state({username:"Harry" || "", isLogged:true || false})
  //basic login setup thing
  render() {
    return (
      <View style={styles.container}>
        <RootStack />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

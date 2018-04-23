import React from 'react';
import { Button, StyleSheet, View} from 'react-native';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      header: 'Login'
    }
  }

  render() {
    if(this.props.parentState.isLogged == false){
      return(
        <View style={styles.navbar}>
          <Button
            onPress={() => this.props.changeState({display: 'Login'})}
            title='Login'
          />
          <Button
            onPress={() => this.props.changeState({display: 'LandingPage'})}
            title='Home'
          />
        </View>
      )
    } else if (this.props.parentState.username === 'Admin'){
      return(
        <View style={styles.navbar}>
          <Button
            onPress={() => this.props.changeState({isLogged: false, display: 'Login'})}
            title='Logout'
          />
          <Button
            onPress={() => this.props.changeState({display: 'LandingPage'})}
            title='Home'
          />
          <Button
            onPress={() => this.props.changeState({display: 'EnterPets'})}
            title='Add Pets'
          />
        </View>
      )
    } else if (this.props.parentState.isLogged == true){
      return(
        <View style={styles.navbar}>
          <Button
            onPress={() => this.props.changeState({isLogged: false, display: 'Login'})}
            title='Logout'
          />
          <Button
            onPress={() => this.props.changeState({display: 'LandingPage'})}
            title='Home'
          />
          <Button
            onPress={() => this.props.changeState({display: 'MyPets'})}
            title='My Pets'
          />
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: 75,
    backgroundColor: '#42dcf4',
  },
});

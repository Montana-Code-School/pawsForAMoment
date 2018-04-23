import React from 'react';
import { Button, Image, ScrollView, StyleSheet, Text, View, } from 'react-native';

export default class LandingPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      scrollPets: [],
    }
  }

  componentDidMount() {
    fetch('http://localhost:5000/pets')
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let petArr = [];
      for(let i = 0; i < data.length; i++) {
        petArr.push((
          <Image
            source = {{uri:data[i].image}}
            style = {{height: 300, width: 300, marginLeft:5, marginRight: 5}}
          />
        ));
      }
      this.setState({
        scrollPets: petArr
      })
    })
    //dont delete stuff below this because its important i swear just hang on to it nw
    if(this.props.parentState.isLogged == true) {
      fetch('http://localhost:5000/displayPets/' + this.props.parentState.username)
      .then((res) => {
        return res.json();
      })
      .then((pets) => {
        this.props.changeState({
          userData: pets,
        })
      })
    }
    //dont delete stuff above its important dolphinately
  }

  findPets(e) {
    let promise = new Promise((res, rej) => {
      fetch('http://localhost:5000/pets')
      .then((res) => {
       return res.json();
      })
      .then((data) => {
        this.props.changeState({
          data: data
        });
        res();
      })
    })
    promise.then(() => {
      this.props.changeState({display: 'Pets'});
    })
  }



  render() {
    return(
      <View style={styles.container}>
        <ScrollView
          style = {{flex: 1, height: 300}}
          horizontal = {true}
          snapToInterval = {310}
          snapToAlignment = {'center'}
          decelerationRate = {0}
        >
          {this.state.scrollPets}
        </ScrollView>
        <Button
          style = {{fontSize: 100}}
          onPress={(e) => this.findPets(e)}
          title='Find pets!'
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    // justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 75
  },
});

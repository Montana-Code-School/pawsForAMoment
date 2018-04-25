import React from 'react';
import { Button, Image, ScrollView, Slider, StyleSheet, Text, View } from 'react-native';

export default class LandingPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      scrollPets: [],
      query: 'All',
    }
  }

//call to our database to show our landing page pets.
  componentDidMount() {
    fetch('http://localhost:5000/pets/default')
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let petArr = [];
      for(let i = 0; i < data.length; i++) {
        petArr.push((
          <Image
            key = {i}
            source = {{uri:data[i].image}}
            style = {{height: 300, width: 300, marginLeft:5, marginRight: 5}}
          />
        ));
      }
      this.setState({
        scrollPets: petArr
      })
    })
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
  }

//find pets button. Queries our database when button is clicked. There is now
//the option to search cat, dog, or both.
  findPets(e) {
    let promise = new Promise((res, rej) => {
      fetch('http://localhost:5000/pets/' + this.state.query)
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
    let species = 'All';
    if(this.state.query == 1) {
      species = 'Cat'
    } else if (this.state.query == 2) {
      species = 'Dog'
    }
    return(
      <View style={styles.container}>
        <ScrollView
          style={{flex: 1, height: 300, top: -25}}
          horizontal={true}
          snapToInterval={310}
          snapToAlignment={'center'}
          decelerationRate={0}
        >
          {this.state.scrollPets}
        </ScrollView>
        <View style={{top: -15, alignItems: 'center'}}>
          <Text style={{paddingTop: 20, fontSize: 16}}>Filter by species: {species}</Text>
          <Slider
            style={{width:300}}
            step={1}
            minimumValue={0}
            maximumValue={2}
            value={this.state.query}
            onValueChange={val => this.setState({query: val})}
          />
          <Button
            style={{fontSize: 100}}
            onPress={(e) => this.findPets(e)}
            title='Find pets!'
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 75
  },
});

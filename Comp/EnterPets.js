import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default class EnterPets extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      shelter: '',
      location: '',
      petname: '',
      species: '',
      breed: '',
      age:  '',
      gender: '',
      bio: '',
      image: '',
      message: ''
    }
  }

  addingNewPets(e) {
    e.preventDefault();
      fetch('http://localhost:5000/pets', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          shelter: this.state.shelter,
          location: this.state.location,
          petname: this.state.petname,
          species: this.state.species,
          breed: this.state.breed,
          age: this.state.age,
          gender: this.state.gender,
          bio: this.state.bio,
          image: this.state.image
        })
      },
      this.setState({
        message: 'Pet Added!'
      }))
    }

      render() {
        return(
          <View style = {petStyle.container}>
            <Text>Shelter: </Text>
            <TextInput
              onChangeText={(shelter) => this.setState({shelter: shelter})}
              value={this.state.shelter}
              autoCapitalize = 'none'
              placeholder = 'Enter here'
            />
            <Text>Location: </Text>
            <TextInput
              onChangeText={(location) => this.setState({location: location})}
              value={this.state.location}
              autoCapitalize = 'none'
              placeholder = 'Enter here'
            />
            <Text>Pet Name: </Text>
            <TextInput
              onChangeText={(petname) => this.setState({petname: petname})}
              value={this.state.petname}
              autoCapitalize = 'none'
              placeholder = 'Enter here'
            />
            <Text>Species: </Text>
            <TextInput
              onChangeText={(species) => this.setState({species: species})}
              value={this.state.species}
              autoCapitalize = 'none'
              placeholder = 'Enter here'
            />
            <Text>Breed: </Text>
            <TextInput
              onChangeText={(breed) => this.setState({breed: breed})}
              value={this.state.breed}
              autoCapitalize = 'none'
              placeholder = 'Enter here'
            />
            <Text>Age: </Text>
            <TextInput
              onChangeText={(age) => this.setState({age: age})}
              value={this.state.age}
              autoCapitalize = 'none'
              placeholder = 'Enter here'
            />
            <Text>Gender: </Text>
            <TextInput
              onChangeText={(gender) => this.setState({gender: gender})}
              value={this.state.gender}
              autoCapitalize = 'none'
              placeholder = 'Enter here'
            />
            <Text>Bio: </Text>
            <TextInput
              onChangeText={(bio) => this.setState({bio: bio})}
              value={this.state.bio}
              autoCapitalize = 'none'
              placeholder = 'Enter here'
            />
            <Text>Image: </Text>
            <TextInput
              onChangeText={(image) => this.setState({image: image})}
              value={this.state.image}
              autoCapitalize = 'none'
              placeholder = 'Enter here'
            />
            <Button
              onPress={(e) => this.addingNewPets(e)}
              title='Submit'
            />
            <Text>{this.state.message}</Text>
          </View>
        )
      }
    }

    const petStyle = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start'
      },
    });

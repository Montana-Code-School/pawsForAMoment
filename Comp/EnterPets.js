import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

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

  // Function to add new pets to database, currently must only be cat or dog.
  addingNewPets(e) {
    e.preventDefault();
    if (this.state.species == 'Cat' || this.state.species == 'Dog') {
      fetch('http://localhost:5000/pets/default', {
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
    } else {
      this.setState({
        message: 'Species must be Cat or Dog'
      })
    }
  }

      render() {
        return(
          <View style={styles.container}>
            <Text style={styles.textInput}>Shelter: </Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(shelter) => this.setState({shelter: shelter})}
              value={this.state.shelter}
              autoCapitalize='none'
              placeholder='Enter here'
            />
            <Text style={styles.textInput}>Location: </Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(location) => this.setState({location: location})}
              value={this.state.location}
              autoCapitalize='none'
              placeholder='Enter here'
            />
            <Text style={styles.textInput}>Pet Name: </Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(petname) => this.setState({petname: petname})}
              value={this.state.petname}
              autoCapitalize='none'
              placeholder='Enter here'
            />
            <Text style={styles.textInput}>Species (must be Cat or Dog): </Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(species) => this.setState({species: species})}
              value={this.state.species}
              autoCapitalize='none'
              placeholder='Enter here'
            />
            <Text style={styles.textInput}>Breed: </Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(breed) => this.setState({breed: breed})}
              value={this.state.breed}
              autoCapitalize='none'
              placeholder='Enter here'
            />
            <Text style={styles.textInput}>Age: </Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(age) => this.setState({age: age})}
              value={this.state.age}
              autoCapitalize='none'
              placeholder='Enter here'
            />
            <Text style={styles.textInput}>Gender: </Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(gender) => this.setState({gender: gender})}
              value={this.state.gender}
              autoCapitalize='none'
              placeholder='Enter here'
            />
            <Text style={styles.textInput}>Bio: </Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(bio) => this.setState({bio: bio})}
              value={this.state.bio}
              autoCapitalize='none'
              placeholder='Enter here'
            />
            <Text style={styles.textInput}>Image: </Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(image) => this.setState({image: image})}
              value={this.state.image}
              autoCapitalize='none'
              placeholder='Enter here'
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

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 100,
      },
      textInput: {
        fontSize: 16,
      }
    });

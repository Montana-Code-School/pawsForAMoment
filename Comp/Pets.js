import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';

export default class Pets extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      listOfPets: [],
      firstImage: ""
    }
  }

  componentDidMount() {
    let data = this.props.parentState.data;
    console.log(this.props.parentState.data);
    let listOfPets = [];
    for(let i = 0; i < data.length; i++) {
      listOfPets.push((
        <TouchableOpacity>
          <View>
            <Text>{data[i].petname}</Text>
          </View>
        </TouchableOpacity>
      ))
    }
    this.setState({listOfPets: listOfPets})
  }

  render() {
    console.log(this.state.firstImage)
    return(
      <View>
        {this.state.listOfPets}
        <Text style={{color:'pink'}}>Show Meowzorz</Text>
      </View>
    )
  }
}

import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';

export default class Pets extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      listOfPets: []
    }
  }
  componentDidMount() {
    let data = this.props.parentState.data;
    console.log(this.props.parentState.data);
    let listOfPets = [];
    for(let i = 0; i < data.length; i++) {
      console.log(typeof data[i].image)
      listOfPets.push((
        <TouchableOpacity>
          <View>
            <Image src={data[i].image}/>
            <Text>{data[i].petname}</Text>
          </View>
        </TouchableOpacity>
      ))
    }
    this.setState({listOfPets: listOfPets})
  }

  render() {
    return(
      <View>
        {this.state.listOfPets}
        <Text style={{color:'pink'}}onPress={() => console.log(this.state.listOfPets)}>Debug</Text>
      </View>
    )
  }
}

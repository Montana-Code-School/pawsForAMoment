import React from 'react';
import {  Image, ScrollView, StyleSheet, Text, TouchableOpacity, Transform, View } from 'react-native';

export default class Pets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heightVal: 100,
      heightStuff: []
    }
  }

  onCLickTestyThing = (e) => {
    console.log(this.state.heightStuff[0]);
  }

  UNSAFE_componentWillMount(){
    let arr = [];
    for(var i = 0; i < this.props.parentState.data.length; i++){
      arr.push(100);
    }
    this.setState({heightStuff: arr});
  }

  render() {
    let data = this.props.parentState.data;
    let listOfPets = [];
    for(let i = 0; i < data.length; i++) {
      listOfPets.push((
        <TouchableOpacity
          style={[styles.petButton, {height: this.state.heightStuff[i]}]}
          key={i}
          onPress={() => {
            let arr = this.state.heightStuff;
            for (var j = 0; j < arr.length; j++) {
             if (i == j){
               arr[j] = 200;
             }else{
               arr[j] = 100;
             }
            }
            this.setState({
              heightStuff:arr
            })
            console.log(this.state.heightStuff);
          }}>
          <Image
            source={{uri: data[i].image}}
            style={styles.petImage}
          />
          <Text
            style={styles.petButtonText}>
            {data[i].petname}
          </Text>
        </TouchableOpacity>

      ))
    }
    return(
      <ScrollView style={styles.contentContainer}>
      <View style={{paddingBottom:100}}>
        {listOfPets}
      </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 20,
    flex: 0,
  },
  petButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    height: 100,
    backgroundColor: '#edeeef',
    marginBottom: 10,
    alignItems: 'center',
    // paddingBottom: 200,
  },
  petButtonText: {
    paddingLeft: '5%',
    fontSize: 20,
    fontWeight: 'bold',
  },
  petImage: {
    marginLeft: 10,
    width: 80,
    height: 80,
    transform: [{scaleY: 1}],
  }
});

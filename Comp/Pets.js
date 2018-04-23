import React from 'react';
import { Image, ScrollView, StyleSheet, Switch, Text,
  TouchableOpacity, Transform, View } from 'react-native';

export default class Pets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heightVals: [],
      showVals: [],
      checkBox: false,
      displayCheckBox: 'none',
    }
  }

  componentDidMount(){
    let boxHeight = [];
    let show = [];
    let checkBox = [];
    for(var i = 0; i < this.props.parentState.data.length; i++) {
      boxHeight.push(100);
      show.push('none');
      checkBox.push(false);
    }
    this.setState({ heightVals: boxHeight, showVals: show, checkBox: checkBox});
    if(this.props.parentState.isLogged == true) {
      this.setState({
        displayCheckBox: 'flex'
      })
    } else {
      this.setState({
        displayCheckBox: 'none'
      })
    }
  }

  render() {
    let data = this.props.parentState.data;
    let listOfPets = [];
    for(let i = 0; i < data.length; i++) {
      listOfPets.push((
        <TouchableOpacity
          style={[styles.petButton, {height: this.state.heightVals[i]}]}
          key={i}
          onPress={() => {
            let boxHeight = this.state.heightVals;
            let show = this.state.showVals;
            for (var j = 0; j < boxHeight.length; j++) {
              if (boxHeight[j] == '100%'){
                boxHeight[j] = 100;
                show[j] = 'none';
              } else if (i == j) {
                boxHeight[j] = '100%';
                show[j] = 'flex';
              } else {
                boxHeight[j] = 100;
                show[j] = 'none';
              }
            }
            this.setState({
              heightVals:boxHeight,
              showVals:show
            })
          }}>
          <Image
            source={{uri: data[i].image}}
            style={styles.petImage}
          />
          <View style = {styles.petInfoText}>
            <Text
              style={styles.petButtonText}>
              {data[i].petname}
            </Text>
            <View style={{
              display:this.state.showVals[i],
              paddingLeft: '10%',
              paddingTop: '10%',
            }}>
              <Text style={styles.petDetails}>Shelter: {data[i].shelter}</Text>
              <Text style={styles.petDetails}>Location: {data[i].location}</Text>
              <Text style={styles.petDetails}>Breed: {data[i].breed}</Text>
              <Text style={styles.petDetails}>Age: {data[i].age}</Text>
              <Text style={styles.petDetails}>Gender: {data[i].gender}</Text>
              <Text style={styles.petDetails}>Bio: {data[i].bio}</Text>
              <View style={{flexDirection: 'row', alignSelf: 'center', paddingTop: 20, display: this.state.displayCheckBox}}>
                <Text style={styles.savePetsButton}>Save to My Pets?</Text>
                <Switch
                  value={this.state.checkBox[i]}
                  onValueChange={() => {
                    let checkBox = this.state.checkBox;
                    for (let k = 0; k < checkBox.length; k++) {
                      if(k == i) {
                        if(checkBox[k] == true) {
                          checkBox[k] = false
                        } else {
                          checkBox[k] = true
                        }
                      }
                    }
                    this.setState({checkBox: checkBox})
                  }}
                />
              </View>
            </View>
          </View>
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
  },
  petButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    height: 100,
    backgroundColor: '#edeeef',
    marginBottom: 10,
    paddingBottom: '10%',
    flexWrap: 'wrap'
  },
  petButtonText: {
    paddingLeft: '35%',
    paddingTop: '14%',
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center'
  },
  petImage: {
    marginLeft: 10,
    marginTop: 10,
    width: 80,
    height: 80,
  },
  petInfoText: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: 250,
  },
  petDetails: {
    fontSize: 16,
  },
  savePetsButton: {
    fontSize: 16,
    fontWeight: 'bold',
  }
});

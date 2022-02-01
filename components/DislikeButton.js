import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import {Audio} from 'expo-av';
import db from '../config.js';

class DislikeButton extends React.Component {
  constructor(){
super();
this.state={

  dislike: 0
  
}
  }


displayAlert=()=>{
 alert(" Thanks for the feedback! We are sorry we couldnt make this exprience enjoyable for you.");

  }
dislikeCounter=()=>{
  this.setState(
    {dislike:this.state.dislike+1
  })
}
  render() {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={() =>{
        this.displayAlert()
      this.dislikeCounter()
        } }>
        <Text
          style={styles.buttonText}>
          Dislike
        </Text>
        <Text> {this.state.dislike}</Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    marginTop: 100,
    borderWidth: 10,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 200,
    backgroundColor: 'red',
    borderRadius: 100,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 20,
  }
});

export default DislikeButton;
import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import {Audio} from 'expo-av';
import db from '../config.js';
class LikeButton extends React.Component {

  constructor(){
super();
this.state={
  like: 0
  
}
  }

displayAlert=()=>{
 alert("Thanks for the feedback! We are very happy to know that your experience was enjoyable");

  }


likeCounter=()=>{
  this.setState(
    {like:this.state.like+1
  })
}

  render() {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={() =>{
         this.displayAlert()
        this.likeCounter()
        } }>
        <Text
          style={styles.buttonText}>
          like
        </Text>
        <Text> {this.state.like}</Text>
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
    backgroundColor: 'green',
    borderRadius: 100,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 20,
  }
});

export default LikeButton;
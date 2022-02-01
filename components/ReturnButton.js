import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import db from '../config.js';
class ReturnButton extends React.Component {

 goToHomeScreen=()=>{
   this.props.navigation.navigate('HomeScreen',{color:'blue'})
  }



  render() {
    return (
      <View>
  <TouchableOpacity style = {styles.button} onPress = {this.goToHomeScreen}>
<Text style= {styles.buttonText}> return</Text>

</TouchableOpacity>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  button: {
    marginTop: 100,
    borderWidth: 10,
    borderColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    height: 100,
    backgroundColor: 'violet',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 20,
  }
});

export default ReturnButton;
import * as React from 'react';
import { View, Text,TouchableOpacity, StyleSheet } from 'react-native';
import SoundButton from '../components/SoundButton'
import AppHeader from '../components/AppHeader'
import ReturnButton from '../components/ReturnButton'
export default class HomeScreen extends React.Component{
 goToHomeScreen=()=>{
   this.props.navigation.navigate('HomeScreen',{color:'blue'})
  }
render(){

  return(
    
<View>

<SoundButton color={this.props.navigation.getParam("color")} />
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

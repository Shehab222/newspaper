import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';


export default class HomeScreen extends React.Component{
  goToBuzzerScreen=()=>{
    this.props.navigation.navigate('BuzzerScreen',{color:'blue'})
  }
    goToJokeScreen=()=>{
    this.props.navigation.navigate('JokeScreen',{color:'blue'})
  }

goToWeatherScreen=()=>{
    this.props.navigation.navigate('WeatherScreen',{color:'blue'})
  }

goToTopNewsScreen=()=>{
    this.props.navigation.navigate('TopNewsScreen',{color:'blue'})
  }

  goToRatingScreen=()=>{
    this.props.navigation.navigate('RatingScreen',{color:'blue'})
    
  }

  goToGoodScreen=()=>{
    this.props.navigation.navigate('GoodScreen',{color:'blue'})
  }

  

render(){
  return(
<View>

<TouchableOpacity style = {style.button} onPress = {this.goToJokeScreen}>
<Text style={style.buttonText}> read a joke</Text>

</TouchableOpacity>

<TouchableOpacity style = {style.button} onPress = {this.goToBuzzerScreen}>
<Text style={style.buttonText}> play a loud buzzer</Text>

</TouchableOpacity>

<TouchableOpacity style = {style.button} onPress = {this.goToWeatherScreen}>
<Text style={style.buttonText}> weather</Text>

</TouchableOpacity>

<TouchableOpacity style = {style.button} onPress = {this.goToTopNewsScreen}>
<Text style={style.buttonText}> top news</Text>

</TouchableOpacity>


<TouchableOpacity style = {style.button} onPress = {this.goToRatingScreen}>
<Text style={style.buttonText}> Rate Us</Text>

</TouchableOpacity>

</View>
  )
}

}

const style=  StyleSheet.create({
button: 
{
    marginTop: 50,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    height: 100,
    backgroundColor: 'blue',
    borderRadius: 20,
    
},
buttonText:{
    color: 'rgb(100,233,255)',
    padding: 20,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
}
})

import * as React from 'react';
import { View } from 'react-native';
import SoundButton from './components/SoundButton'
import AppHeader from './components/AppHeader'
import HomeScreen from './screen/HomeScreen'
 import BuzzerScreen from './screen/BuzzerScreen'
 import JokeScreen from './screen/JokeScreen'
 import TopNewsScreen from './screen/TopNewsScreen'
 import WeatherScreen from './screen/WeatherScreen'
 import RatingScreen from './screen/RatingScreen'
 import GoodScreen from './screen/GoodScreen'
 import BadScreen from './screen/BadScreen'
import {createAppContainer,createSwitchNavigator} from 'react-navigation'

export default class App extends React.Component {
 constructor(){
super();
this.state={
  like: 0,
  dislike: 0
  
}
 
 }
 
 
  render() {
    return (
      <View>
        <AppHeader/>
        <AppContainer/>
      </View>
    );
  }
}

var AppNavigator =  createSwitchNavigator({
HomeScreen: HomeScreen,
BuzzerScreen: BuzzerScreen,
JokeScreen: JokeScreen,
TopNewsScreen:TopNewsScreen,
WeatherScreen: WeatherScreen,
RatingScreen:RatingScreen,
BadScreen:BadScreen,
GoodScreen:GoodScreen
})
const AppContainer = createAppContainer(AppNavigator)
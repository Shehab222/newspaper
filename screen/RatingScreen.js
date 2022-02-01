import * as React from 'react';
import { View, Text,TouchableOpacity, StyleSheet} from 'react-native';
import LikeButton from '../components/LikeButton'
import DislikeButton from '../components/DislikeButton'
import ReturnButton from '../components/ReturnButton'
import AppHeader from '../components/AppHeader'
import db from '../config.js';

export default class HomeScreen extends React.Component{
constructor(){
super();
this.state={
  like: 0,
  dislike: 0
  
}


 
 }
incrementCounter2=()=>{
  this.setState(
    {dislike:this.state.dislike+1
  })
}

 incrementCounter=()=>{
  this.setState(
    {like:this.state.like+1
  })
}
 goToHomeScreen=()=>{
   this.props.navigation.navigate('HomeScreen',{color:'blue'})
  }
render(){

  return(
<View>

<LikeButton color={this.props.navigation.getParam("color")} />
<DislikeButton color={this.props.navigation.getParam("color")} />
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
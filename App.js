import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Search from "./screens/Search.js"
import BottomTabNavigator from "./bottomtabnavigator"
import * as Font from "expo-font"
import {Rajdhani_500Medium} from "@expo-google-fonts/rajdhani"

export default class App extends React.Component{
  constructor(){
    super()
    this.state = {
      fontloaded:false
    }
  }
  async loadfonts(){
    await Font.loadAsync({
      Rajdhani_500Medium:Rajdhani_500Medium
    })
    this.setState({
      fontloaded:true
    })
  }
  componentDidMount(){
    this.loadfonts()
  }
  render(){
    if(fontloaded == true){
  return (
    <BottomTabNavigator/>
    
  );
    }
    return null
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

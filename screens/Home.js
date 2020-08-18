import React, {Component} from 'react';
import SplashScreen from 'react-native-splash-screen'
import { Platform, StyleSheet, View, Text, } from 'react-native';

export default class Home extends React.Component{
  componentDidMount() {
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    SplashScreen.hide();
    }
  render(){
    return(
      <View style = {StyleSheet.container}>
        <Text>HomeScreen</Text>
      </View>
    )
  }
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  
});
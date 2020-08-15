import React, {Component} from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import Blink from './components/Blink';
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('./images/background.png')}
          style={styles.image}>
          {/* <Text style={styles.text}>Press to Continuous</Text> */}
          <Blink text="Press to Continuous" />
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'stretch',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

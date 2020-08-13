/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import { ImageBackground, StyleSheet, Text, View,Image } from "react-native";

const App = () => (
  <View style={styles.container}>
    <ImageBackground source={require('./images/image.jpg')} style={styles.image}>
      <Text style={styles.text}>Press to Continuous</Text>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  text: {
    color: "grey",
    fontSize: 30,
    fontWeight: "bold"
  }
});

export default App;


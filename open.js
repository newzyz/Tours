import React, {Component} from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('./images/image.jpg')}
          style={styles.image}>
          {/* <Text style={styles.text}>Press to Continuous</Text> */}
          <Blink text="Press to Continuous" />
        </ImageBackground>
      </View>
    );
  }
}
class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {isShowingText: true};

    // Toggle the state every second
    setInterval(
      () =>
        this.setState((previousState) => ({
          isShowingText: !previousState.isShowingText,
        })),
      700,
    );
  }

  render() {
    if (!this.state.isShowingText) {
      return null;
    }

    return <Text style={styles.text}>{this.props.text}</Text>;
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
  text: {
    color: 'gray',
    backgroundColor: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 700,
  },
});

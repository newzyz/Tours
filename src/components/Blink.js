import React, {Component} from 'react';
import {StyleSheet, Text} from 'react-native';

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
      1000,
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
  text: {
    width: 100,
    height: 25,
    marginTop: 0,
    alignItems: 'center',
    backgroundColor: 'red',
    color: 'white',
  },
});

export default Blink;

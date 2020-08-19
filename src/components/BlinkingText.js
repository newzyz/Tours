import React, {Component} from 'react';
import { Platform, StyleSheet, View, Text} from 'react-native';
export default class BlinkingText extends Component {
    constructor(props) {
      super(props);
      this.state = {showText: true};
   
      // Change the state every second 
      setInterval(() => {
        this.setState(previousState => {
          return { showText: !previousState.showText };
        });
      }, 
      // Define any blinking time.
      1000);
    }
   
    render() {
      let display = this.state.showText ? this.props.text : ' ';
      return (
        <Text style={styles.text}>{display}</Text>
      );
    }
  }
  const styles = StyleSheet.create({
    text: {
      color: 'gray',
      backgroundColor: 'white',
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 500,
    },
  })
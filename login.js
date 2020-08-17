import React, {Component} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Alert,
  AppRegistry,
  TouchableHighlight,
  TextInput,
} from 'react-native';
export default class App extends Component {
  state = {
    email: '',
    password: '',
  };
  _onPressButton(email, pass) {
    alert('email: ' + email + ' password: ' + pass);
  }

  _onLongPressButton() {
    Alert.alert('You long-pressed the button!');
  }

  render() {
    return (
      <ImageBackground
        source={require('./images/back.jpg')}
        style={styles.image}>
        <View style={styles.container1}>
          <View style={styles.container}>
            <Text style={styles.text}>SkinGuide</Text>
            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="Email"
              placeholderTextColor="gray"
              autoCapitalize="none"
              onChangeText={(text) => this.setState({email: text})}
            />
            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="Password"
              placeholderTextColor="gray"
              autoCapitalize="none"
              onChangeText={(text) => this.setState({password: text})}
            />
            <TouchableHighlight
              onPress={() =>
                this._onPressButton(this.state.email, this.state.password)
              }
              onLongPress={this._onLongPressButton}
              underlayColor="white">
              <View style={styles.button}>
                <Text style={styles.buttonText}>login</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    width: 320,
    height: 280,
    marginLeft: 37,
  },
  container1: {
    alignItems: 'center',
    backgroundColor: 'gray',
    width: 322,
    height: 289,
    marginLeft: 37,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  button: {
    marginBottom: 30,
    width: 80,
    height: 25,
    alignItems: 'center',
    backgroundColor: 'gray',
  },
  input: {
    margin: 15,
    height: 40,
    width: 250,
    borderColor: 'black',
    borderWidth: 1,
  },
  text: {
    margin: 15,
    color: 'gray',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

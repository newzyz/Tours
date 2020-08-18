import React, {Component} from 'react';
import SplashScreen from 'react-native-splash-screen'
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Alert,
  AppRegistry,
  TouchableHighlight,
  TextInput,
  Image,
} from 'react-native';
export default class App extends Component {
  componentDidMount() {
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    SplashScreen.hide();
    }
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
        <Image
          style={styles.container1}
          source={require('./images/login2.jpg')}></Image>
        <View style={styles.container}>
          <Text style={styles.text}></Text>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="  Username"
            placeholderTextColor="gray"
            autoCapitalize="none"
            onChangeText={(text) => this.setState({email: text})}
          />
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="  Password"
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
              <Text style={styles.buttonText}>เข้าสู่ระบบ</Text>
            </View>
          </TouchableHighlight>
          <Text style={styles.text}>ลืมรหัสผ่านใช่หรือไม่?</Text>
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    width: 520,
    height: 280,
    marginLeft: -50,
    flex: 3,
  },
  container1: {
    alignItems: 'center',
    backgroundColor: 'gray',
    width: 420,
    height: 150,
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  button: {
    width: 150,
    height: 25,
    alignItems: 'center',
    backgroundColor: '#b2c4c8',
  },
  input: {
    marginTop: -5,
    margin: 15,
    height: 40,
    width: 250,
    borderColor: 'black',
    borderWidth: 1,
  },
  text: {
    margin: 15,
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text2: {
    color: 'black',
    fontSize: 9,
  },
});

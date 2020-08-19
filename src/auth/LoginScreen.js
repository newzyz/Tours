import React, {Component} from 'react';
import SplashScreen from 'react-native-splash-screen';
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
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {IMAGE} from '../constant/Image';
// export class LoginScreen extends Component {
//   render() {
//     return (
//       <SafeAreaView style={{flex: 1}}>
//         <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//           <Text>Login Screen</Text>
//           <TouchableOpacity
//             style={{marginTop: 20}}
//             onPress={() => this.props.navigation.navigate('HomeApp')}>
//             <Text>Login</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={{marginTop: 20}}
//             onPress={() => this.props.navigation.navigate('Register')}>
//             <Text>Register</Text>
//           </TouchableOpacity>
//         </View>
//       </SafeAreaView>
//     );
//   }
// }
export class LoginScreen extends Component {
  componentDidMount() {
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    const {navigation} = this.props;
    //Adding an event listner om focus
    //So whenever the screen will have focus it will set the state to zero
    this.focusListener = navigation.addListener('didFocus', () => {
      this.setState({count: 0});
    });
    SplashScreen.hide();
  }
  componentWillUnmount() {
    // Remove the event listener before removing the screen from the stack
    this.focusListener.remove();
  }

  state = {
    email: '',
    password: '',
  };
  _onPressButton(email, pass) {
    if (email == 'Admin' && pass == '1234') {
      this.props.navigation.navigate('HomeApp');
    } else {
      alert('username หรือ password ไม่ถูกต้อง');
    }
  }

  _onLongPressButton() {
    Alert.alert('You long-pressed the button!');
  }

  render() {
    return (
      <ImageBackground source={IMAGE.IMAGE_BACK} style={styles.image}>
        <Image style={styles.container1} source={IMAGE.IMAGE_LOGIN}></Image>
        <View style={styles.container}>
          <Text style={styles.text}></Text>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="  Username"
            placeholderTextColor="gray"
            autoCapitalize="none"
            onChangeText={(text) => this.setState({email: text})}
            ref={(text) => {
              this.textInput = text;
            }}
          />
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="  Password"
            placeholderTextColor="gray"
            autoCapitalize="none"
            secureTextEntry={true}
            onChangeText={(text) => this.setState({password: text})}
            ref={(text) => {
              this.textInput = text;
            }}
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
          <TouchableOpacity
            style={{marginTop: 300}}
            onPress={() => this.props.navigation.navigate('Register')}>
            <Text style={styles.text}>สมัครสมาชิก</Text>
          </TouchableOpacity>
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
    marginLeft: 10,
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

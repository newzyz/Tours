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
export class LoginScreen extends Component {
  constructor() {
    super();

    this.state = {
      username: '',

      password: '',

      ActivityIndicator_Loading: true,
    };
  }

  componentDidMount() {
    const {navigation} = this.props;
    this.focusListener = navigation.addListener('didFocus', () => {
      this.setState({count: 0});
    });
    SplashScreen.hide();
  }
  getData = async () => {
    const url = 'http://localhost/api/login_api.php?Id=' + this.state.email;
    return fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({data: responseJson});
      });
  };
  login = () => {
    this.props.navigation.navigate('HomeApp');
  };

  _onLongPressButton() {
    Alert.alert('You long-pressed the button!');
  }

  render() {
    return (
      <ImageBackground source={IMAGE.IMAGE_BACK} style={styles.image}>
        <Image style={styles.container1} source={IMAGE.IMAGE_BACK}></Image>
        <View style={styles.container}>
          <Text style={styles.text}></Text>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="  Username"
            placeholderTextColor="gray"
            autoCapitalize="none"
            onChangeText={(text) => this.setState({username: text})}
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
            onPress={() => this.login()}
            onLongPress={this._onLongPressButton}
            underlayColor="white">
            <View style={styles.button}>
              <Text style={styles.buttonText}>เข้าสู่ระบบ</Text>
            </View>
          </TouchableHighlight>
          <TouchableOpacity
            style={{marginTop: 0}}
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
    backgroundColor: '#d2f5e3',
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

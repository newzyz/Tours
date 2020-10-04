import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  Button,
  TextInput,
  StyleSheet,
} from 'react-native';
import {CustomHeader} from '../index';
import {IMAGE} from '../constant/Image';
export class RegisterScreen extends Component {
  constructor() {
    super();

    this.state = {
      username: '',

      password: '',

      first: '',

      last: '',

      ActivityIndicator_Loading: false,
    };
  }

  Insert_Data_Into_MySQL = () => {
    this.setState({ActivityIndicator_Loading: true}, () => {
      fetch('http://localhost:8888/api/register_api.php', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: this.state.username,

          password: this.state.password,

          first: this.state.first,

          last: this.state.last,
        }),
      })
        .then((response) => response.json())
        .then((responseJsonFromServer) => {
          alert(responseJsonFromServer);
          this.setState({ActivityIndicator_Loading: false});
        })
        .catch((error) => {
          console.error(error);
          this.setState({ActivityIndicator_Loading: false});
        });
    });
    this.props.navigation.navigate('HomeApp');
  };
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <CustomHeader title="Register" navigation={this.props.navigation} />
        <ScrollView>
          <View style={styles.container}>
            <Image
              source={IMAGE.IMAGE_LOGIN}
              style={{width: 200, height: 200}}
            />
            <TextInput
              style={styles.input}
              placeholder="Username"
              autoCapitalize="none"
              placeholderTextColor="#b2c4c8"
              onChangeText={(TextInputText) =>
                this.setState({username: TextInputText})
              }
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry={true}
              autoCapitalize="none"
              placeholderTextColor="#b2c4c8"
              onChangeText={(TextInputText) =>
                this.setState({password: TextInputText})
              }
            />
            <TextInput
              style={styles.input}
              placeholder="Firstname"
              autoCapitalize="none"
              placeholderTextColor="#b2c4c8"
              onChangeText={(TextInputText) =>
                this.setState({first: TextInputText})
              }
            />
            <TextInput
              style={styles.input}
              placeholder="Lastname"
              autoCapitalize="none"
              placeholderTextColor="#b2c4c8"
              onChangeText={(TextInputText) =>
                this.setState({last: TextInputText})
              }
            />
            <Button title="Sign Up" onPress={this.Insert_Data_Into_MySQL} />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 55,
    backgroundColor: 'white',
    margin: 10,
    padding: 8,
    color: 'black',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

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
  StyleSheet
} from 'react-native';
import {CustomHeader} from '../index';
import{IMAGE} from '../constant/Image'
export class RegisterScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <CustomHeader title="Register" navigation={this.props.navigation} />
        <ScrollView>
        <View style={styles.container}>
        <Image source={IMAGE.IMAGE_LOGIN} style={{width:200,height:200}} />
        <TextInput
          style={styles.input}
          placeholder='Username'
          autoCapitalize="none"
          placeholderTextColor='#b2c4c8'
          onChangeText={val => this.onChangeText('username', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor='#b2c4c8'
          onChangeText={val => this.onChangeText('password', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Email'
          autoCapitalize="none"
          placeholderTextColor='#b2c4c8'
          onChangeText={val => this.onChangeText('email', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Phone Number'
          autoCapitalize="none"
          placeholderTextColor='#b2c4c8'
          onChangeText={val => this.onChangeText('phone_number', val)}
        />
        <Button
          title='Sign Up'
          onPress={this.signUp}
        />
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
    alignItems: 'center'
  }
})
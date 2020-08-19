import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {IMAGE} from './constant/Image';

export class CustomDrawerContent extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#b2c4c8'}}>
        <View
          style={{height: 150, alignItems: 'center', justifyContent: 'center'}}>
          <Image source={IMAGE.ICON_PROFILE} />
        </View>
        <ScrollView style={{marginLeft: 10}}>
          <TouchableOpacity
            style={{marginTop: 20}}
            onPress={() => this.props.navigation.navigate('MenuTab')}>
            <Text>SKINGUIDE</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{marginTop: 20}}
            onPress={() => this.props.navigation.navigate('Notifications')}>
            <Text>ถามGuide</Text>
          </TouchableOpacity>
        </ScrollView>
        <TouchableOpacity
          style={{marginTop: 20, marginLeft: 10}}
          onPress={() => this.props.navigation.navigate('Login')}>
          <Text style={{color: 'red'}}>Logout</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

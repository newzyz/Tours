import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {IMAGE} from './constant/Image';

export class CustomDrawerContent extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#b2c4c8'}}>
        <View
          style={{height: 150, alignItems: 'center', justifyContent: 'center'}}>
          <Image style={{width: 120, height: 120}} source={IMAGE.IMAGE_USER} />
        </View>
        <ScrollView style={{marginLeft: 0}}>
          <TouchableOpacity
            style={{
              marginTop: 5,
              height: 30,
              width: 280,
              alignItems: 'center',
              backgroundColor: '#607B8B',
            }}
            onPress={() => this.props.navigation.navigate('MenuTab')}>
            <Text style={styles.text}>Admin</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginTop: 0,
              height: 50,
              width: 280,
              alignItems: 'flex-start',
              backgroundColor: '#607B8B',
            }}
            onPress={() => this.props.navigation.navigate('MenuTab')}>
            <Text style={{fontSize: 15, color: 'white', marginLeft: 25}}>
              เงินคงเหลือ : 400.00 บาท
            </Text>
            <Text style={{fontSize: 15, color: 'white', marginLeft: 25}}>
              คะแนน : 277
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginTop: 0,
              backgroundColor: 'white',
              width: 280,
              height: 40,
              borderBottomColor: '#8B795E',
            }}
            onPress={() => this.props.navigation.navigate('MenuTab')}>
            <Text style={styles.text1}>
              <Image
                style={{
                  width: 22,
                  height: 22,
                  alignItems: 'stretch',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
                source={IMAGE.ICON_HOME_W}
              />
              {'  '} หน้าแรก
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginTop: 1.5,
              backgroundColor: 'white',
              width: 280,
              height: 40,
              borderBottomColor: '#8B795E',
            }}
            onPress={() => this.props.navigation.navigate('Notifications')}>
            <Text style={styles.text1}>
              <Image
                style={{
                  width: 22,
                  height: 22,
                  alignItems: 'stretch',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
                source={IMAGE.ICON_QUESTION}
              />
              {'  '} ถามGuide
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginTop: 1.5,
              backgroundColor: 'white',
              width: 280,
              height: 40,
              borderBottomColor: '#8B795E',
            }}
            onPress={() => this.props.navigation.navigate('MenuTab')}>
            <Text style={styles.text1}>เติมเงิน</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginTop: 1.5,
              backgroundColor: 'white',
              width: 280,
              height: 40,
              borderBottomColor: '#8B795E',
            }}
            onPress={() => this.props.navigation.navigate('MenuTab')}>
            <Text style={styles.text1}>ตั้งค่า</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginTop: 1.5,
              backgroundColor: 'white',
              width: 280,
              height: 40,
              borderBottomColor: '#8B795E',
            }}
            onPress={() => this.props.navigation.navigate('MenuTab')}>
            <Text style={styles.text1}>ช่วยเหลือ</Text>
          </TouchableOpacity>
        </ScrollView>
        <TouchableOpacity
          style={{marginTop: 20, marginLeft: 10}}
          onPress={() => this.props.navigation.navigate('Login')}>
          <Text style={{fontSize: 15, color: 'red'}}>Logout</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  text: {
    margin: 1,
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
  text1: {
    marginLeft: 10,
    marginTop: 5,
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  container: {
    backgroundColor: '#8B8878',
  },
});

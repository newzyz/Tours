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
          <Text style={styles.text1}>Admin</Text>
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
            onPress={() =>
              this.props.navigation.navigate('MenuTab')
            }></TouchableOpacity>
          <TouchableOpacity
            style={{
              marginTop: -20,
              height: 60,
              width: 280,
              alignItems: 'flex-start',
              backgroundColor: '#607B8B',
            }}
            onPress={() => this.props.navigation.navigate('MenuTab')}>
            <Text style={{fontSize: 15, color: 'white', marginLeft: 25}}>
              <Image
                style={{
                  width: 22,
                  height: 22,
                  alignItems: 'stretch',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
                source={IMAGE.ICON_BANK}
              />
              {'  '} : 400.00 ฿
            </Text>
            <Text style={{fontSize: 15, color: 'white', marginLeft: 25}}>
              <Image
                style={{
                  width: 22,
                  height: 22,
                  alignItems: 'stretch',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
                source={IMAGE.ICON_COIN}
              />
              {'  '}: 277 coins
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
            <Text style={styles.text1}>
              <Image
                style={{
                  width: 22,
                  height: 22,
                  alignItems: 'stretch',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
                source={IMAGE.ICON_MONEY}
              />
              {'  '}เติมเงิน
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
            <Text style={styles.text1}>
              <Image
                style={{
                  width: 22,
                  height: 22,
                  alignItems: 'stretch',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
                source={IMAGE.ICON_GEAR}
              />
              {'  '}ตั้งค่า
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
            <Text style={styles.text1}>
              <Image
                style={{
                  width: 22,
                  height: 22,
                  alignItems: 'stretch',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
                source={IMAGE.ICON_INFO}
              />
              {'  '}ช่วยเหลือ
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginLeft: 0,
              marginTop: 35,
              backgroundColor: 'white',
              width: 280,
              height: 40,
              backgroundColor: '#CD5C5C',
            }}
            onPress={() => this.props.navigation.navigate('Login')}>
            <Text
              style={{
                marginTop: 7,
                marginLeft: 90,
                fontSize: 18,
                color: 'white',
                textAlign: 'center',
              }}>
              <Image
                style={{
                  width: 22,
                  height: 22,
                }}
                source={IMAGE.ICON_LOGOUT}
              />
              {'  '}
              Logout
            </Text>
          </TouchableOpacity>
        </ScrollView>
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
    marginTop: 0,
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  container: {
    backgroundColor: '#8B8878',
  },
});

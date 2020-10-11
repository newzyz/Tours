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
      <SafeAreaView style={{flex: 1, backgroundColor: '#d2f5e3'}}>
        <View
          style={{height: 150, alignItems: 'center', justifyContent: 'center'}}>
          <Image style={{width: 120, height: 120}} source={IMAGE.IMAGE_USER} />
          <Text style={styles.text1}>Admin</Text>
        </View>
        <ScrollView style={{marginLeft: 0}}>
          <TouchableOpacity
            style={{
              marginTop: 0,
              backgroundColor: 'white',
              width: 280,
              height: 40,
              borderBottomColor: '#8B795E',
            }}
            onPress={() => this.props.navigation.navigate('Home')}>
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
              {'  '}หน้าแรก
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
            onPress={() => this.props.navigation.navigate('Staff')}>
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
              {'  '}สตาร์ฟ 
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
            onPress={() => this.props.navigation.navigate('Customer')}>
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
              {'  '}ลูกค้า
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
            onPress={() => this.props.navigation.navigate('Package')}>
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
              {'  '}แพ็คเกจ
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
            onPress={() => this.props.navigation.navigate('Search')}>
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
              {'  '}ค้นหาสตาร์ฟ
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
            onPress={() => this.props.navigation.navigate('Reserve')}>
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
              {'  '}จองทัวร์
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
            onPress={() => this.props.navigation.navigate('Summary')}>
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
              {'  '}สรุปการจอง
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

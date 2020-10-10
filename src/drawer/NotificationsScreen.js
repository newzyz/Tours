import React, {Component} from 'react';
import {
  Platform,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  StyleSheet,
  TextInput,
} from 'react-native';
import {CustomHeader} from '../index';
import {IMAGE} from '../constant/Image';

export class NotificationsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <CustomHeader title="ถามไกด์" navigation={this.props.navigation} />
        <View style={styles.container}>
          <ImageBackground source={IMAGE.IMAGE_GUIDE} style={styles.image}>
            <Text style={styles.text}>
              คุณต้องการปรึกษาปัญหาเรื่องผิวพรรณด้านไหน หรือ
              ต้องการผลิตภัณฑ์ดูแลผิวแบบไหน ?
            </Text>
            <TextInput
              style={styles.text1}
              placeholder="เช่น สิวเสี้ยน สิวอักเสบ ผด ..."
              onChangeText={(text) => this.setState({text})}
            />
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('GuideDetail', {
                  text: this.state.text,
                })
              }>
              <Text style={styles.text1}>ส่ง</Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'stretch',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: Platform.OS === 'ios' ? -420 : -300,
    marginLeft: 60,
    marginRight: 70,
  },
  text1: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 150,
    marginLeft: 100,
    marginRight: 50,
  },
});

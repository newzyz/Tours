import React, {Component} from 'react';
import {ImageBackground, StyleSheet, Text, TextInput, View} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('./images/guide.jpg')}
          style={styles.image}>
          <Text style={styles.text}>
            คุณต้องการปรึกษาปัญหาเรื่องผิวพรรณด้านไหน หรือ
            ต้องการผลิตภัณฑ์ดูแลผิวแบบไหน ?
          </Text>
          <TextInput
            style={styles.text1}
            placeholder="เช่น สิวเสี้ยน สิวอักเสบ ผด ..."
            onChangeText={(text) => this.setState({text})}
          />
        </ImageBackground>
      </View>
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
    marginTop: -420,
    marginLeft: 60,
    marginRight: 50,
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

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
            คุณต้องการปรึกษาปัญหาเรื่องผิวพรรณเรื่องไหน หรือ
            ต้องการผลิตภัณฑ์ดูแลผิวแบบไหน ?
          </Text>
          <TextInput
            style={{height: 40}}
            placeholder="Type here to translate!"
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
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: -600,
  },
});

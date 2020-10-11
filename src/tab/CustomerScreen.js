import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Button,
  TouchableHighlight,
  Platform,
} from 'react-native';
//chart
import {BarChart, LineChart} from 'react-native-chart-kit';
import {Dimensions} from 'react-native';
const screenWidth = Dimensions.get('window').width;

import {CustomHeader} from '../index';
import {IMAGE} from '../constant/Image';
export class CustomerScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    const url = 'http://172.20.10.3/apiforest/select_all_customer.php';
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          data: this.state.data.concat(responseJson),
        });
      });
  };

  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <CustomHeader
          title="ลูกค้า"
          navigation={this.props.navigation}
        />
        <ScrollView style={{flex: 1, marginTop: 20}}>
          <SafeAreaView
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 20,
              marginTop: 20,
            }}>
              <SafeAreaView>
              <Text style={{fontSize:30}}>ข้อมูลลูกค้า{"\n"}</Text>
            </SafeAreaView>
            {this.state.data.map((data, index) => (
              <SafeAreaView key={index}  style={{flexDirection: 'row'}}>
                <SafeAreaView>
                  <Text style={{fontSize:25}}>ไอดีลูกค้า: {data.CID}{"\n"}</Text>
                  <Text style={{fontSize:25}}>ชื่อลูกค้า: {data.CName}{"\n"}</Text>
                  <Text style={{fontSize:25}}>โทรศัพท์: {data.CTelephone}{"\n"}</Text>
                  <Text style={{fontSize:25}}>เพศ: {data.CSex}{"\n"}</Text>
                  <View
                    style={{
                      borderBottomColor: 'black',
                      borderBottomWidth: 1,
                      marginBottom:20,
                    }}
                  />
                </SafeAreaView>
              </SafeAreaView>
            ))}


          </SafeAreaView>
        </ScrollView>
      </SafeAreaView>
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
  loginScreenButton: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#1E6738',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  loginText: {
    color: '#fff',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  container1: {
    alignItems: 'center',
    backgroundColor: 'gray',
    width: 420,
    height: 50,
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
    width: 55,
    height: 20,
    marginTop: 10,
    fontSize: 16,
    alignItems: 'center',
    backgroundColor: 'orange',
    color: 'white',
    marginLeft: 10,
  },
  button2: {
    width: 150,
    height: 25,
    alignItems: 'center',
    marginLeft: 20,
    backgroundColor: '#b2c4c8',
  },
  button1: {
    width: 50,
    height: 20,
    marginTop: 10,
    alignItems: 'center',
    backgroundColor: 'red',
    color: 'white',
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
    fontSize: 16,
    fontWeight: 'bold',
  },
  text2: {
    color: 'black',
    fontSize: 9,
  },
});
import React, { Component } from 'react';
import {
  Text,
  TextInput,
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
import {Dimensions,Switch} from 'react-native';
const screenWidth = Dimensions.get('window').width;
import {CustomHeader} from '../index';
import {IMAGE} from '../constant/Image';
export class ReserveScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      name:'',
      phone:'',
      sex:'',
      id:'',
      images: [
        IMAGE["GTour"],
        IMAGE["BTour"],
        IMAGE["Dinner"],
        IMAGE["Lunch"],
      ],
      selectItem: [],
    };
  
  }
  
  componentDidMount() {
    this.getData();
  }
  selectPackage(packageOne) {
    this.setState({ selectItem: this.state.selectItem.concat(packageOne) })
  }
  clearSelect() {
    this.setState({ selectItem: [] })
  }
  getData = async () => {
    const url = 'http://172.20.10.3/apiforest/select_all_product.php';
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          data: this.state.data.concat(responseJson),
          
        });
        updateSelect();
      });
  };
  insertCustomer = () => {
    this.setState({ActivityIndicator_Loading: true}, () => {
      fetch(
        'http://172.20.10.3/apiforest/insert_customer.php?name='+this.state.name +'&phone='+this.state.phone+'&sex='+this.state.sex+'&id='+this.state.id,
      )
        .then()
        .catch((error) => {
          console.error(error);
        });
    });
  };
  insertBooking = () => {
    this.setState({ActivityIndicator_Loading: true}, () => {
      fetch(
        'http://172.20.10.3/apiforest/insert_booking.php?id='+'&id='+this.state.id+'&GTour='+$selectItem[0]+'&BTour='+selectItem[1]+'&Dinner='+selectItem[2]+'&Lunch='+selectItem[3],
      )
        .then()
        .catch((error) => {
          console.error(error);
        });
    });
  };
  
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <CustomHeader
          title="จองแพ็คเกจ"
          navigation={this.props.navigation}
        />
        <ScrollView style={{flex: 1, marginTop: 0}}>
          <SafeAreaView
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 10,
              marginRight: 10,
              marginTop: 20,
            }}>
            <SafeAreaView>
              <Text style={{fontSize:25}}>จองแพ็คเกจ{"\n"}</Text>
              <SafeAreaView style={{marginBottom:10}}>
                <TextInput
                  style={{backgroundColor:"#d2f5e3",width:"100%"}}
                  underlineColorAndroid="transparent"
                  placeholder="กรอกไอดีผู้จอง"
                  placeholderTextColor="gray"
                  autoCapitalize="none"
                  onChangeText={(text) => this.setState({id: text})}
                  ref={(text) => {
                    this.textInput = text;
                  }}
                ></TextInput>
                </SafeAreaView>
              <SafeAreaView style={{marginBottom:10}}>
                <TextInput
                  style={{backgroundColor:"#d2f5e3",width:"100%"}}
                  underlineColorAndroid="transparent"
                  placeholder="กรอกชื่อผู้จอง"
                  placeholderTextColor="gray"
                  autoCapitalize="none"
                  onChangeText={(text) => this.setState({name: text})}
                  ref={(text) => {
                    this.textInput = text;
                  }}
                ></TextInput>
                </SafeAreaView>
              <SafeAreaView style={{marginBottom:10}}>
                <TextInput
                  style={{backgroundColor:"#d2f5e3",width:"100%"}}
                  underlineColorAndroid="transparent"
                  placeholder="กรอกโทรศัพท์"
                  placeholderTextColor="gray"
                  autoCapitalize="none"
                  onChangeText={(text) => this.setState({phone: text})}
                  ref={(text) => {
                    this.textInput = text;
                  }}
                  ></TextInput>
              </SafeAreaView>
              <SafeAreaView style={{marginBottom:10}}>
                <TextInput
                  style={{backgroundColor:"#d2f5e3",width:"100%"}}
                  underlineColorAndroid="transparent"
                  placeholder="กรอกเพศ"
                  placeholderTextColor="gray"
                  autoCapitalize="none"
                  onChangeText={(text) => this.setState({sex: text})}
                  ref={(text) => {
                    this.textInput = text;
                  }}
                  ></TextInput>
              </SafeAreaView>
              <Text style={{fontSize:25}}>เลือกแพ็คเกจ</Text>
              {this.state.selectItem.map((selectItem, index) => (
                <Text key={index} style={{fontSize:25}}>{selectItem}</Text>
                
              ))}
              <TouchableHighlight
                onPress={() => this.clearSelect()}
                underlayColor="white">
                <SafeAreaView style={styles.button}>
                  <Text style={styles.buttonText}>เคลียร์แพ็คเกจ</Text>
                </SafeAreaView>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() => this.insertCustomer()}
                underlayColor="white">
                <SafeAreaView style={styles.buttonConfirm}>
                  <Text style={styles.buttonText}>ยืนยันการจอง</Text>
                </SafeAreaView>
              </TouchableHighlight>
            </SafeAreaView >
            
            {/* {this.state.data.map((data, index) => (
              <SafeAreaView key={index}  style={{flexDirection: 'row'}}>
                
                <SafeAreaView>
                  <Text style={{fontSize:25}}>สถานที่: {data.packagename}{"\n"}</Text>
                  <Text style={{fontSize:25}}>ตำแหน่งที่อยู่: {data.address}{"\n"}</Text>
                  <Text style={{fontSize:25}}>ลักษณะเด่น: {data.signature}{"\n"}</Text>
                  <Text style={{fontSize:25}}>ประวัติ: {data.history}{"\n"}</Text>
                  <View
                    style={{
                      borderBottomColor: 'black',
                      borderBottomWidth: 1,
                      marginBottom:20,
                    }}
                  />
                </SafeAreaView>
              </SafeAreaView>
            ))} */}


          </SafeAreaView>
          {this.state.data.map((data, index) => (
          <SafeAreaView key={index} style={{flex: 1,justifyContent: 'center',alignItems: 'center',marginLeft: 10,
              marginRight: 10,marginTop: 20,}}>
              <TouchableOpacity onPress={() => this.selectPackage(data.PName)} style={{justifyContent: 'center',alignItems: 'center',backgroundColor:"#d2f5e3",width:"100%",height:100}}>
                <Text style={{fontSize:60}} >{data.PName}</Text>
              </TouchableOpacity>
            </SafeAreaView >
            ))}
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
    width: "100%",
    height: 20,
    marginTop: 10,
    fontSize: 16,
    alignItems: 'center',
    backgroundColor: 'red',
    color: 'white',
    marginLeft: 10,
    justifyContent: 'center'
    
  },
  buttonConfirm: {
    width: "100%",
    height: 20,
    marginTop: 10,
    fontSize: 16,
    alignItems: 'center',
    backgroundColor: 'green',
    color: 'white',
    marginLeft: 10,
    justifyContent: 'center'
    
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
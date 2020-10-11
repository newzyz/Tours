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
  TouchableHighlight
} from 'react-native';
import {CustomHeader} from '../index';
import {IMAGE} from '../constant/Image';

export class SearchScreen extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      search: '',
      uniqueValue: 1
    };
  }
  componentDidMount() {
    this.setState({isLoading: true,data:[]}, this.getSearchData);
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  toggleSwitch = (value) => {
    //onValueChange of the switch this function will be called
    this.setState({switchValue: value});
    //state changes according to switch
    //which will result in re-render the text
  };
  
  getData = async () => {
    const url =
      'http://172.20.10.3/apiforest/select_all_staff.php';
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          data: this.state.data.concat(responseJson),
          isLoading: false,
        });
      });
  };
  getSearchData = async () => {
    const url =
      'http://172.20.10.3/apiforest/search_staff.php?search='+this.state.search;
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          data: this.state.data.concat(responseJson),
          isLoading: false,
          
        });
      });
  };
  render() {
    return (
      <SafeAreaView key={this.state.uniqueValue} style={{flex: 1}}>
      <CustomHeader
          title="ค้นหาสตาร์ฟ"
          navigation={this.props.navigation}
        />
      <SafeAreaView style={{alignItems: 'center'}}>
        <TextInput
                style={{backgroundColor:"white",width:"50%"}}
                underlineColorAndroid="transparent"
                placeholder="ชื่อหรือไอดี"
                placeholderTextColor="gray"
                autoCapitalize="none"
                onChangeText={(text) => this.setState({search: text})}
                ref={(text) => {
                  this.textInput = text;
                }}
        ></TextInput>
        <TouchableHighlight onPress={() => this.getSearchData()}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>ค้นหา</Text>
              </View>
        </TouchableHighlight>
      </SafeAreaView>
      <ScrollView key={this.state.uniqueValue} style={{flex: 1, marginTop: 20}}>
          
          <SafeAreaView
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 20,
              marginTop: 10,
            }}>
              <SafeAreaView>
              <Text style={{fontSize:30}}>ข้อมูลสตาร์ฟ{"\n"}</Text>
            </SafeAreaView>
            {this.state.data.map((data, index) => (
              <SafeAreaView key={index}  style={{flexDirection: 'row'}}>
                <SafeAreaView>
                  <Image style={{width:200,height:200}} source={IMAGE[data.SPhoto]}></Image>
                  <Text style={{fontSize:25}}>ไอดีสตาร์ฟ: {data.SID}{"\n"}</Text>
                  <Text style={{fontSize:25}}>ชื่อสตาร์ฟ: {data.SName}{"\n"}</Text>
                  <Text style={{fontSize:25}}>เบอร์โทร: {data.STelephone}{"\n"}</Text>
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
    flex: 1,
    marginVertical: 20,
    backgroundColor: '#FFF',
  },
  product_card: {
    flex: 1,
    marginRight: 10,
    marginLeft: 10,
    marginVertical: 0,
    backgroundColor: '#FFF',
  },
  item: {
    borderBottomColor: '#ccc',
    marginBottom: 10,
    borderBottomWidth: 1,
  },
  itemImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  itemText: {
    fontSize: 20,
    padding: 5,
  },
  loader: {
    marginTop: 10,
    alignItems: 'center',
  },
  button: {
    width: 150,
    height: 25,
    alignItems: 'center',
    borderBottomColor:'black',
    backgroundColor: '#d2f5e3',
  },
});
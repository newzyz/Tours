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
import {SliderBox} from 'react-native-image-slider-box';
import {CustomHeader} from '../index';
import {IMAGE} from '../constant/Image';
export class PackageScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      food: [],
      images: [
        IMAGE["GTour"],
        IMAGE["BTour"],
        IMAGE["Dinner"],
        IMAGE["Lunch"],
      ],
    };
  }

  componentDidMount() {
    this.getData();
    this.getFoodData();
  }

  getData = async () => {
    const url = 'http://172.20.10.3/apiforest/select_all_packagedetail.php';
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          data: this.state.data.concat(responseJson),
        });
      });
  };
  getFoodData = async () => {
    const url = 'http://172.20.10.3/apiforest/select_all_food.php';
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          food: this.state.food.concat(responseJson),
        });
      });
  };
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <CustomHeader
          title="แพ็คเกจ"
          navigation={this.props.navigation}
          isHome={true}
        />
        <ScrollView style={{flex: 1, marginTop: 0}}>
        <SliderBox
              images={this.state.images}
              // onCurrentImagePressed={(index) =>
              //   this.props.navigation.navigate('HomeDetail', {
              //     itemId: this.state.itemInSlide[index],
              //   })
              // }
              // currentImageEmitter={index => console.warn(`current pos is: ${index}`)}
              autoplay={true}
              circleLoop={true}
              imageLoadingColor={'black'}
            />
          <SafeAreaView
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 20,
              marginTop: 20,
            }}>
            <SafeAreaView>
          
              <Text style={{fontSize:25}}>ข้อมูลแพ็คเกจ{"\n"}</Text>
            </SafeAreaView>
            {this.state.data.map((data, index) => (
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
            ))}
            <Text style={{fontSize:25}}>อาหารพื้นเมือง{"\n"}</Text>
            {this.state.food.map((food, index) => (
              <SafeAreaView key={index}  style={{flexDirection: 'row',marginTop:10,alignSelf:'flex-start'}}>
                <SafeAreaView>
                  <Image style={{width:200,height:200}} source={IMAGE[food.foodPhoto]}></Image>
                </SafeAreaView>
                <SafeAreaView>
                  <Text style={{fontSize:25}}>ชื่ออาหาร: {food.foodName}{"\n"}</Text>
                </SafeAreaView>
                <View
                    style={{
                      borderBottomColor: 'black',
                      borderBottomWidth: 1,
                      marginBottom:20,
                    }}
                  />
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
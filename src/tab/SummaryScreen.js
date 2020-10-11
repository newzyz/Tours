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
export class SummaryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customer: [],
      package:[],
      booking:[],
      type:1
    };
  }

  
  componentDidMount() {
    this.setState({isLoading: true}, this.getData);
  }
  getData = async () => {
    const url = 'http://172.20.10.3/apiforest/select_all_booking.php';
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          booking: this.state.booking.concat(responseJson),
        });
      });
  };
  
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <CustomHeader
          title="สรุปแพ็คเกจ"
          navigation={this.props.navigation}
        />
        <ScrollView style={{flex: 1, marginTop: 0}}>
          <SafeAreaView
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 20,
              marginTop: 20,
            }}>
            <SafeAreaView>
              <Text style={{fontSize:30}}>สรุปแพ็คเกจ{"\n"}</Text>
            </SafeAreaView>
            {/* {this.state.data.map((data, index) => (
              <SafeAreaView>  
                <Text style={{fontSize:25}}>แพ็คเกจ {data.PName}{"\n"}</Text>
                </SafeAreaView>
            ))} */}
            
            {this.state.booking.map((booking, index) => (
              <SafeAreaView key={index}  style={{flexDirection: 'row'}}>
                <SafeAreaView>
                  <Text style={{fontSize:25}}>ชื่อลูกค้า:{booking.CID} {"\n"}</Text>
                  <Text style={{fontSize:25}}>Garden Tour: {booking.GTour}{"\n"}</Text>
                  <Text style={{fontSize:25}}>Boat Tour: {booking.BTour}{"\n"}</Text>
                  <Text style={{fontSize:25}}>Dinner: {booking.Dinner}{"\n"}</Text>
                  <Text style={{fontSize:25}}>Lunch: {booking.Lunch}{"\n"}</Text>
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
          <SafeAreaView
            style={{marginTop: 25, marginBottom: 50, flexDirection: 'column',height:400}}>
            <SafeAreaView style={{flex: 1,height:300}}>
              <Text style={{alignSelf: 'center'}}>แพ็คเกจยอดฮิต</Text>
                <BarChart
                  data={dataForBarChart}
                  width={screenWidth}
                  height={400}
                  yAxisLabel=""
                  chartConfig={chartConfig}
                  verticalLabelRotation={30}
                />
            </SafeAreaView>
          </SafeAreaView>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const dataForBarChart = {
  labels: ['Garden Tour', 'Boat tour', 'Dinner', 'Lunch'],
  datasets: [
    {       
        data: [2, 1, 1, 2],
    },
  ],
  };
const chartConfig = {
  backgroundColor: '#1cc910',
  backgroundGradientFrom: '#eff3ff',
  backgroundGradientTo: '#efefef',
  decimalPlaces: 2,
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  style: {
  borderRadius: 16,

  },
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
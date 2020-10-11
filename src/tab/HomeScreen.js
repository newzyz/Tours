import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import {CustomHeader} from '../index';
import {SliderBox} from 'react-native-image-slider-box';
import {IMAGE} from '../constant/Image';
export class HomeScreen extends React.Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      images: [
        IMAGE.IMAGE_SLIDE_1,
        IMAGE.IMAGE_SLIDE_2,
        IMAGE.IMAGE_SLIDE_3,
        IMAGE.IMAGE_SLIDE_4,
      ],
      itemInSlide: [1, 2, 3, 4],
      data: [],
      start: 0,
      end: 6,
    };
  }
  componentDidMount() {
    this.setState({isLoading: true}, this.getData);
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
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
  renderRow = ({item}) => {
    return (
      <View style={styles.product_card}>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('HomeDetail', {
              itemId: item.product_id,
            });
          }}>
          <Image source={IMAGE.IMAGE_SLIDE_1} style={styles.itemImage} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('HomeDetail')}>
          <Text style={styles.itemText}>ID:{item.SID}</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.itemText}>ชื่อ Staff:{item.SName}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('HomeDetail')}>
          <Text style={styles.itemText}>เบอร์โทร:{item.STelephone}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  renderFooter = () => {
    return this.state.isLoading ? (
      <SafeAreaView style={styles.loader}>
        <ActivityIndicator size="large" />
      </SafeAreaView>
    ) : null;
  };
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <CustomHeader
          title="Forest Tour"
          isHome={true}
          navigation={this.props.navigation}
        />
        <SafeAreaView  style={{height:"50%"}}>
          <TouchableOpacity style={{backgroundColor:'#e5df88'}}  onPress={() => {
              this.props.navigation.navigate('Home');
            }}>
            <SafeAreaView style={{justifyContent: 'center', alignItems: 'center',height:"20%"}}>
              <Text
                style={{
                  alignSelf: 'center',
                  marginTop: 50,
                  fontSize:30
                }}>
                หน้าหลัก
              </Text>
            </SafeAreaView>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor:'#fbf7f0'}} onPress={() => {
              this.props.navigation.navigate('Package');
            }}>
            <SafeAreaView style={{justifyContent: 'center', alignItems: 'center',height:"20%"}}>
              <Text
                style={{
                  alignSelf: 'center',
                  marginTop: 50,
                  fontSize:30
                  
                }}>
                เมนูเพ็คเกจ
              </Text>
            </SafeAreaView>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor:'#fafcc2'}} onPress={() => {
              this.props.navigation.navigate('Customer');
            }}>
            <SafeAreaView style={{justifyContent: 'center', alignItems: 'center',height:"20%"}}>
              <Text
                style={{
                  alignSelf: 'center',
                  marginTop: 50,
                  fontSize:30
                }}>
                เมนูลูกค้า
              </Text>
            </SafeAreaView>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor:'#edc988'}}
          onPress={() => {
            this.props.navigation.navigate('Staff');
          }}>
            <SafeAreaView style={{justifyContent: 'center', alignItems: 'center',height:"20%"}}>
              <Text
                style={{
                  alignSelf: 'center',
                  marginTop: 50,
                  fontSize:30
                }}>
                เมนูสตาร์ฟ
              </Text>
            </SafeAreaView>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor:'#e8ffff'}}
          onPress={() => {
            this.props.navigation.navigate('Search');
          }}>
            <SafeAreaView style={{justifyContent: 'center', alignItems: 'center',height:"20%"}}>
              <Text
                style={{
                  alignSelf: 'center',
                  marginTop: 50,
                  fontSize:30
                }}>
                เมนูค้นหาสตาร์ฟ
              </Text>
            </SafeAreaView>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor:'#fcdada'}} onPress={() => {
            this.props.navigation.navigate('Reserve');
          }}>
            <SafeAreaView style={{justifyContent: 'center', alignItems: 'center',height:"20%"}}>
              <Text
                style={{
                  alignSelf: 'center',
                  marginTop: 50,
                  fontSize:30
                }}>
                เมนูจองทัวร์
              </Text>
            </SafeAreaView>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor:'#9ab3f5'}}
          onPress={() => {
            this.props.navigation.navigate('Summary');
          }}>
            <SafeAreaView style={{justifyContent: 'center', alignItems: 'center',height:"20%"}}>
              <Text
                style={{
                  alignSelf: 'center',
                  marginTop: 50,
                  fontSize:30
                }}>
                เมนูสรุปการจอง
              </Text>
            </SafeAreaView>
          </TouchableOpacity>
        </SafeAreaView>
        {/* <FlatList
          style={styles.container}
          data={this.state.data}
          keyExtractor={(item, index) => String(index)}
          renderItem={this.renderRow}
          numColumns={2}
        /> */}
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
});

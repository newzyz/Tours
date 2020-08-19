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
  StatusBar,
} from 'react-native';
import axios from 'axios';
import {CustomHeader} from '../index';
import { SliderBox } from "react-native-image-slider-box";
import {IMAGE} from "../constant/Image"
export class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading:true,
      images: [
        IMAGE.IMAGE_LOGIN,
        IMAGE.IMAGE_LOGIN,
        IMAGE.IMAGE_LOGIN,
        IMAGE.IMAGE_LOGIN,
      ],
      data :[1,2,3],
      
    }
  };

  renderRow = ({item}) =>{
    return (
    <View style={styles.item}>
      <Image source={{uri:item.coin_icon_url}} style={styles.itemImage}/>
      <Text style={styles.itemText}>Product Name</Text>
    </View>
    )
  }
  render() {
    console.log(this.response)
    if (!this.state.isLoading) {
      return(
        <SafeAreaView>
           <CustomHeader
            title="Home"
            isHome={true}
            navigation={this.props.navigation}
          />
          <Text>Not Load</Text>
        </SafeAreaView>
      );
          
    } else {
      return (
        <SafeAreaView style={{flex: 1}}>
          <CustomHeader
            title="Home"
            isHome={true}
            navigation={this.props.navigation}
          />
          <SliderBox
            images={this.state.images}
            onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
            currentImageEmitter={index => console.warn(`current pos is: ${index}`)}
            autoplay={true}
            circleLoop={true}
            imageLoadingColor={'white'}
          />
          <View style={{marginTop:10,justifyContent: 'flex-start', alignItems: 'center'}}>
            <Text style={{alignItems:'center',marginTop:10}}>ผลิตภัณฑ์แนะนำ</Text>
          </View>
          {/* <View style={{
            flex: 1,
            height:100,
            marginTop:10,
            marginLeft:10,
            marginRight:10,
            alignItems:'flex-start', 
            backgroundColor:'black',
            flexDirection:'row',
            justifyContent:'space-between'
            }}>
            <View style = {styles.product_card}></View>
            <View style = {styles.product_card}></View>
          </View> */}
            {/* <TouchableOpacity
              style={{marginTop: 20}}
              onPress={() => this.props.navigation.navigate('HomeDetail')}>
              <Text>Go to Home Detail</Text>
            </TouchableOpacity> */}
            <FlatList
            style={styles.container}
            data={this.state.data}
            renderItem={this.renderRow}
          />
        </SafeAreaView>
        
        
      );
      
    }
    
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop:20,
    backgroundColor:'#FFF'
  },
  product_card: {
    flex: 1,
    width:300,
    height:100,
    backgroundColor:'blue',
    marginLeft:10,
    marginRight:10,
  },
  item:{
    borderBottomColor:'#ccc',
    marginBottom:10,
    borderBottomWidth:1
  },
  itemImage:{
    width:'100%',
    height:200,
    resizeMode:'cover'
  },
  itemText:{
    fontSize:20,
    padding:5
  }
});
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
import {SliderBox} from 'react-native-image-slider-box';
import {IMAGE} from '../constant/Image';
export class HomeScreen extends React.Component {
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
      data: [],
      page: 1,
    };
  }
  componentDidMount() {
    this.setState({isLoading: true}, this.getData);
  }
  getData = async () => {
    const url =
      'https://jsonplaceholder.typicode.com/photos?_limit=6&_page=' +
      this.state.page;
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
          onPress={() => this.props.navigation.navigate('HomeDetail')}>
          <Image source={{uri: item.url}} style={styles.itemImage} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('HomeDetail')}>
          <Text style={styles.itemText}>{item.title}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('HomeDetail')}>
          <Text style={styles.itemText}>{item.id}</Text>
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

  handleLoadMore = () => {
    this.setState({page: this.state.page + 1}, this.getData);
  };
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <CustomHeader
          title="Home"
          isHome={true}
          navigation={this.props.navigation}
        />
        <SliderBox
          images={this.state.images}
          onCurrentImagePressed={(index) =>
            this.props.navigation.navigate('HomeDetail')
          }
          // currentImageEmitter={index => console.warn(`current pos is: ${index}`)}
          autoplay={true}
          circleLoop={true}
          imageLoadingColor={'white'}
        />
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text
            style={{
              alignSelf: 'center',
              marginTop: 10,
            }}>
            ผลิตภัณฑ์แนะนำ
          </Text>
        </View>
        <FlatList
          style={styles.container}
          data={this.state.data}
          renderItem={this.renderRow}
          onEndReached={this.handleLoadMore}
          numColumns={numColumns}
          // onEndReachedThreshold={0}
          // ListFooterComponent = {this.renderFooter}
        />
      </SafeAreaView>
    );
  }
}
const numColumns = 2;
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

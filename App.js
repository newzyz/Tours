import * as React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import SplashScreen from 'react-native-splash-screen';
import {CustomHeader, CustomDrawerContent} from './src';
import {
  HomeScreen,
  HomeScreenDetail,
  CustomerScreen,
  SettingsScreenDetail,
  PackageScreen,
  SearchScreen,
  SummaryScreen,
  ReserveScreen
} from './src/tab';
import {StaffScreen} from './src/drawer';
import {RegisterScreen, LoginScreen} from './src/auth';
import {IMAGE} from './src/constant/Image';
SplashScreen.hide();

const Tab = createBottomTabNavigator();
const navOptionHandler = () => ({
  headerShown: false,
});

const StackHome = createStackNavigator();

function HomeStack() {
  return (
    <StackHome.Navigator initialRouteName="Home">
      <StackHome.Screen
        name="Home"
        component={HomeScreen}
        options={navOptionHandler}
      />
      <StackHome.Screen
        name="HomeDetail"
        component={HomeScreenDetail}
        options={navOptionHandler}
      />
      
    </StackHome.Navigator>
  );
}

const StackPackage = createStackNavigator();

function PackageStack() {
  return (
    <StackPackage.Navigator initialRouteName="Package">
      <StackPackage.Screen
        name="Package"
        component={PackageScreen}
        options={navOptionHandler}
      />
      <StackPackage.Screen
        name="PackageDetail"
        component={SettingsScreenDetail}
        options={navOptionHandler}
      />
    </StackPackage.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? IMAGE.ICON_HOME_B : IMAGE.ICON_HOME_W;
          } else if (route.name === 'Package') {
            iconName = focused ? IMAGE.ICON_SETTING_B : IMAGE.ICON_SETTING_W;
          }

          // You can return any component that you like here!
          return (
            <Image
              source={iconName}
              style={{width: 20, height: 20}}
              resizeMode="contain"
            />
          );
        },
      })}
      tabBarOptions={{
        activeBackgroundColor: '#b2c4c8',
        activeTintColor: 'black',
        inactiveTintColor: 'black',
      }}>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Package" component={PackageStack} />
    </Tab.Navigator>
  );
}

const Drawer = createDrawerNavigator();

function DrawerNavigator({navigation}) {
  return (
    <Drawer.Navigator
      initialRouteName="MenuTab"
      drawerContent={() => <CustomDrawerContent navigation={navigation} />}>
      <Drawer.Screen name="MenuTab" component={TabNavigator} />
      <Drawer.Screen name="Staff" component={StaffScreen} />
      <Drawer.Screen name="Customer" component={CustomerScreen} />
      <Drawer.Screen name="Search" component={SearchScreen} />
      <Drawer.Screen name="Summary" component={SummaryScreen} />
      <Drawer.Screen name="Reserve" component={ReserveScreen} />
    </Drawer.Navigator>
  );
}
const StackApp = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StackApp.Navigator initialRouteName="Login">
        <StackApp.Screen
          name="HomeApp"
          component={DrawerNavigator}
          options={navOptionHandler}
        />
        <StackApp.Screen
          name="Login"
          component={LoginScreen}
          options={navOptionHandler}
        />
        <StackApp.Screen
          name="Register"
          component={RegisterScreen}
          options={navOptionHandler}
        />
      </StackApp.Navigator>
    </NavigationContainer>
  );
}

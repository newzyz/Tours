import * as React from 'react';
import { Text, 
        View,
        SafeAreaView, 
        Image,
        TouchableOpacity,
        ScrollView
         } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator} from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer';
import SplashScreen from 'react-native-splash-screen'


SplashScreen.hide();


function CustomHeader({title,isHome,navigation}){
  return(
    <View style={{flexDirection:'row',height:50}}>
      <View style ={{flex:1,justifyContent:'center'}}>
        {
          isHome?
            <TouchableOpacity onPress={()=>navigation.openDrawer()}>
              <Image style = {{'width':30,'height':30 ,'marginLeft':5}}
              source={require('./resource/icons/menu.png')}
              resizeMode="contain"/>
            </TouchableOpacity>
          :
          <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}
          onPress={()=>navigation.goBack()}
          >
            <Image style={{width:25,height:25,marginLeft:5}}
              source={require('./resource/icons/back.png')}
              resizeMode="contain"
            />
            <Text>Back</Text>
          </TouchableOpacity>
        }   
    </View>

      <View style ={{flex:1.5,justifyContent:'center'}}>
  <Text style ={{textAlign:'center'}}>{title}</Text>
      </View>
      <View style ={{flex:1,}}></View>
      </View>
  )
}
function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={{ flex: 1}}>
      <CustomHeader title="Home" isHome={true} navigation={navigation}/>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Home!</Text>
          <TouchableOpacity
            style = {{marginTop:20}}
            onPress = {()=>navigation.navigate('HomeDetail')}
          >
            <Text>Go to Home Detail</Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
}
function HomeScreenDetail({navigation}) {
  return (
    <SafeAreaView style={{ flex: 1}}>
      <CustomHeader title="Home Detail" navigation={navigation}/>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Home Detail!</Text>
          
        </View>
    </SafeAreaView>
  );
}
function SettingsScreen({navigation}) {
  return (
    <SafeAreaView style={{ flex: 1}}>
      <CustomHeader title="Setting"  isHome={true} navigation={navigation}/>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Setting!</Text>
          <TouchableOpacity
            style = {{marginTop:20}}
            onPress = {()=>navigation.navigate('SettingDetail')}
          >
            <Text>Go to Settings Detail</Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
}
function SettingsScreenDetail({navigation}) {
  return (
    <SafeAreaView style={{ flex: 1}}>
      <CustomHeader title="Setting Detail" navigation={navigation} />
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Setting Detail!</Text>
        </View>
    </SafeAreaView>
  );
}
function NotificationsScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1}}>
      <CustomHeader title="Notifications" navigation={navigation} />
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Notification Screen!</Text>
        </View>
    </SafeAreaView>
  );
}
function RegisterScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1}}>
      <CustomHeader title="Register" navigation={navigation} />
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Register Screen!</Text>
        </View>
    </SafeAreaView>
  );
}
function LoginScreen({navigation}) {
  return (
    <SafeAreaView style={{ flex: 1}}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Login Screen</Text>
          <TouchableOpacity
            style = {{marginTop:20}}
            onPress = {()=>navigation.navigate('HomeApp')}
          >
            <Text>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style = {{marginTop:20}}
            onPress = {()=>navigation.navigate('Register')}
          >
            <Text>Register</Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
}

function CustomDrawerContent(props){
  return(
    <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
      <View style={{height:150,alignItems:'center', justifyContent:'center'}}>
        <Image source={require('./resource/icons/profile.png')}/>
        </View>
      <ScrollView style={{marginLeft:10}}>
          <TouchableOpacity
            style = {{marginTop:20}}
            onPress = {()=> props.navigation.navigate('MenuTab')}
          >
            <Text>Menu Tab</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style = {{marginTop:20}}
            onPress = {()=> props.navigation.navigate('Notifications')}
          >
            <Text>Notifications</Text>
          </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}
const Tab = createBottomTabNavigator();
const navOptionHandler = () =>({
  headerShown: false
})

const StackHome= createStackNavigator()

function HomeStack() {
  return(
    <StackHome.Navigator initialRouteName="Home">
      <StackHome.Screen name="Home" component={HomeScreen} options={navOptionHandler}/>
      <StackHome.Screen name="HomeDetail" component={HomeScreenDetail} options={navOptionHandler}/>
    </StackHome.Navigator>
  )
}

const StackSetting = createStackNavigator()

function SettingStack() {
  return(
    <StackSetting.Navigator initialRouteName="Setting">
      <StackSetting.Screen name="Setting" component={SettingsScreen} options={navOptionHandler}/>
      <StackSetting.Screen name="SettingDetail" component={SettingsScreenDetail} options={navOptionHandler}/>
    </StackSetting.Navigator>
  )

}

function TabNavigator(){
  return(
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused
            ? require('./resource/icons/home_b.png')
            : require('./resource/icons/home_w.png');
        } else if (route.name === 'Settings') {
          iconName = focused ? 
          require('./resource/icons/setting_b.png') 
          : require('./resource/icons/setting_w.png');
        }

        // You can return any component that you like here!
        return <Image source={iconName} style={{width:20,height:20}} 
        resizeMode="contain" />;
      },
    })}
    tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'black',
    }}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Settings" component={SettingStack} />
    </Tab.Navigator>
  );
}

const Drawer = createDrawerNavigator();

function DrawerNavigator(){
  return(
    <Drawer.Navigator initialRouteName="MenuTab" 
      drawerContent={props => CustomDrawerContent(props)}>
        <Drawer.Screen name="MenuTab" component={TabNavigator} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
    </Drawer.Navigator>
  )
}
const StackApp= createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <StackApp.Navigator initialRouteName="Login">
        <StackApp.Screen name="HomeApp" component={DrawerNavigator} options={navOptionHandler}/>
        <StackApp.Screen name="Login" component={LoginScreen} options={navOptionHandler}/>
        <StackApp.Screen name="Register" component={RegisterScreen} options={navOptionHandler}/>
      </StackApp.Navigator>
    </NavigationContainer>
  );
}
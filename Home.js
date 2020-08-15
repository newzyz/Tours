import React,{Component} from 'react';
import {View,Text} from 'react-native';
import SplashScreen from 'react-native-splash-screen'
var bg = require('./images/background.png')
export default class Home extends Component
{
    componentDidMount() {
    	// do stuff while splash screen is shown
        // After having done stuff (such as async tasks) hide the splash screen
        SplashScreen.hide();
    }
    render()
    {
        return(
            <View>
                <Text>HOME</Text>
            </View>
        );
    }
}
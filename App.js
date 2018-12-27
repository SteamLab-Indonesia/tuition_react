/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform,  Text, View, Dimensions} from 'react-native';
import AppScreen from './src/screen/StackNavigatorMain';
import { savePushToken } from './src/lib/localDB';
import OneSignal from 'react-native-onesignal';
import { PermissionsAndroid } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
const entireScreenWidth = Dimensions.get('window').width;


EStyleSheet.build({
    $screenBackground: '#F3F3F3',
    $primaryBlue: '#0a4096',
    $white: '#ffffff',
    $lineColor: '#c1c1c1',
    $iconBackground: '#f2c4d9',
    $rem: entireScreenWidth / 380,
})




async function requestPermission() {
  if (Platform.OS === 'android') {  
    try {
      const granted = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.CAMERA
      ])
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the camera")
      } else {
        console.log("Camera permission denied")
      }
    } catch (err) {
      console.warn(err)
    }
  }
}


export default class App extends Component {
  
  componentWillMount() {
    requestPermission();
    OneSignal.init("01491a9f-21c0-40f7-994f-3963550f7554");
    OneSignal.addEventListener('ids', this.onIds);
    OneSignal.configure();
  }
    
  onIds(device) {
      console.log('Device info: ', device);
      if (device)
      {
          if (device.userId)
          {
              savePushToken(device.pushToken, device.userId);
          }            
      }
  }

  render() {
    return (
      <AppScreen />
    );
  }
}

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

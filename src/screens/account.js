//import liraries
import React, { Component } from 'react';
import {
  AsyncStorage,
  SafeAreaView,
  StyleSheet, 
  View,
  ActivityIndicator
} from 'react-native';
import { WebView } from 'react-native-webview';
import OneSignal from 'react-native-onesignal';

// create a component
class MyClass extends Component {
 
        render() {
          return (
            <WebView
              source={{
                uri: 'https://www.yagmurkirtasiye.com.tr/index.php?p=myinfo'
              }}
              style={{ marginTop: 20 }}
            />
          );
        }
      }
    
    
     
export default MyClass;



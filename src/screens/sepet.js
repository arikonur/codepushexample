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
      

            <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
              <WebView
                style={{flex: 1}}
                //Loading URL
                source={{ uri: 'https://www.yagmurkirtasiye.com.tr/sepetimigoster.html'}}
                
                
                //Enable Javascript support
                javaScriptEnabled={true}
                //For the Cache
                domStorageEnabled={true}
                startInLoadingState={true}
              
               
              />
      
      
       
            </View>
          </SafeAreaView>
      
          );
        }
      }

      const styles = StyleSheet.create({
        container: {
          backgroundColor: '#ea5c15',
          flex: 1,
          marginBottom: 80,
        },
        activityIndicatorStyle: {
          flex: 1,
          position: 'absolute',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: 'auto',
          marginBottom: 'auto',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          justifyContent: "space-around",
        },
      });
    
    
     
export default MyClass;

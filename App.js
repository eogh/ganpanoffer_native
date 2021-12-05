import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, BackHandler, Platform } from 'react-native';
import { WebView } from 'react-native-webview';
// import { getStatusBarHeight } from "react-native-status-bar-height"; 

export default function App() {
  
  const onAndroidBackPress = () => {
    // BackHandler.goBack();
    navigation.goBack();
    return true;
  }

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', onAndroidBackPress);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', onAndroidBackPress);
    }
  }, []);

  
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
      <WebView 
        source={{ uri: 'http://rlawogud928.cafe24.com' }}
        style={styles.container}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // paddingTop: getStatusBarHeight()
    paddingTop: 20
  },
});
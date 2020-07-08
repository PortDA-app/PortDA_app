import React, {Component} from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';
import {createAppContainer} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';

import Footer from "./Footer";
import TabNavigator from "./TabNav";
import SignupScreen  from "./SignupScreen";
import LoginScreen  from "./LoginScreen";
import PostsScreen from './PostsScreen';



export default class HomeScreen extends React.Component {
  render () {
    return (
        <View style={styles.container}>
        <Text>Welcome Home</Text>
        
      </View>
      );
  }
}


const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
  }
});

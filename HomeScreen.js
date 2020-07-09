import React, {Component} from 'react';
<<<<<<< HEAD
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';
import {createAppContainer} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';

import Footer from "./Footer";
import TabNavigator from "./TabNav";
import SignupScreen  from "./SignupScreen";
import LoginScreen  from "./LoginScreen";
import PostsScreen from './PostsScreen';

import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import HeaderComponent from './components/HeaderComponent';


export default class HomeScreen extends React.Component {
  render () {
    return (
      <View style={styles.container}>
		<HeaderComponent />
        <Text>Home Screen</Text>
      </View>
	  );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  }
});

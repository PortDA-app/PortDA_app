import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View, TouchableOpacity
} from 'react-native';

import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

import IOSIcon from "react-native-vector-icons/Ionicons";
import ProfileScreen from "./ProfileScreen";
import NotificationsScreen from "./NotificationsScreen";
import SearchScreen from "./SearchScreen";
import HomeScreen from "./HomeScreen";
import PostsScreen from "./PostsScreen";
import NewPostScreen from "./NewPostScreen";
import Footer from "./Footer";
import Icon from 'react-native-vector-icons/Feather';


const TabNavigator = createMaterialBottomTabNavigator({
  Home : {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: () => (
        <Icon name="home" size={25} color="white" />
      ),
  barStyle: {backgroundColor: 'red',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'black',
    flexDirection: 'row',
    alignContent: 'stretch',}
    }
  },
  Posts : {
    screen: PostsScreen,
    navigationOptions: {
      tabBarLabel: 'Posts',
      tabBarIcon: () => (
        <Icon name="list" size={25} color="white" />
      ),
      barStyle: {backgroundColor: '#146eb4',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'black',
    flexDirection: 'row',
    alignContent: 'stretch',}
    }
  },
  Search : {
    screen: SearchScreen,
    navigationOptions: {
      tabBarLabel: 'Search',
      tabBarIcon: () => (
        <Icon name="search" size={25} color="white" />
      ),
      barStyle: {backgroundColor: '#146eb4',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'black',
    flexDirection: 'row',
    alignContent: 'stretch'}
    }
  },
  Profile : {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: () => (
        <Icon name="user" size={25} color="white" />
      ),
      barStyle: {backgroundColor: '#146eb4',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'black',
    flexDirection: 'row',
    alignContent: 'stretch'}
    }
  }
});

export default TabNavigator;
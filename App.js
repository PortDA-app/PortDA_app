import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';

import HeaderComponent from './components/HeaderComponent';
import Icon from 'react-native-vector-icons/Feather';
import { Card, ListItem, Header, Button } from 'react-native-elements';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator,createSwitchNavigator} from 'react-navigation-stack';
import HomeScreen from './HomeScreen';
import SearchScreen from './SearchScreen';
import PostsScreen from './PostsScreen';
import ProfileScreen from './ProfileScreen';
import NewPostScreen from './NewPostScreen';
import SignupScreen from './SignupScreen';
import LoginScreen from './LoginScreen';


import NotificationsScreen from './NotificationsScreen';
import CreatePostScreen from './CreatePostScreen';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="white"
      labelStyle={{ fontSize: 15 }}
      barStyle={{
        backgroundColor: '#f90',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#f90',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          activeBackgroundColor: '#146eb4',
          tabBarIcon: () => <Icon name="home" size={25} color="white" />,
        }}
      />
      <Tab.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          tabBarLabel: 'Posts',
          tabBarIcon: () => <Icon name="list" size={25} color="white" />,
        }}
      />
      <Tab.Screen
        name="NewPost"
        component={NewPostScreen}
        options={{
          tabBarLabel: 'New Posts',
          tabBarIcon: () => <Icon name="plus-circle" size={25} color="white" />,
        }}
      />
      <Tab.Screen
      name="Notifications"
      component={NotificationsScreen}
      options={{
        tabBarLabel: 'Notifications',
        tabBarIcon: () => <Icon name="bell" size={25} color="white" />
      }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: () => <Icon name="search" size={25} color="white" />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: () => <Icon name="user" size={25} color="white" />,
        }}
      />
      
    </Tab.Navigator>
  );
}

export default function App() {
  return ([
	<NavigationContainer>
    <MyTabs />
    </NavigationContainer>
  ]);
}

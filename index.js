import React, { Component } from 'react';
import { AppRegistry, Dimensions } from 'react-native';
import { DrawerNavigator } from 'react-navigation';

import SideMenu from './SideMenu/SideMenu';
import stackNav from './app/stacknav';
import App from './App';

const drawernav = DrawerNavigator({
  Item1: {
      screen: stackNav,
      screen:Signup;
    }
  }, {
    contentComponent: SideMenu,
    drawerWidth: Dimensions.get('window').width - 120,  
});

AppRegistry.registerComponent('Demo', () => drawernav);
import * as React from 'react';
import { StyleSheet, Text, View, Dimensions,TouchableOpacity } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import HomeScreen from '../HomeScreen';
import SearchScreen from '../SearchScreen';
import PostsScreen from '../PostsScreen';
import ProfileScreen from '../ProfileScreen';
import NewPostScreen from '../NewPostScreen';
import NotificationsScreen from '../NotificationsScreen';
import CreatePostScreen from '../CreatePostScreen';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { Button,Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';


function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}


function MyDrawer() {
	const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
  );
}
	
export default function SideMenuComponent() {
	
	  return (
			<MyDrawer />
	  );
}
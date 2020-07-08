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
import AssetExample from './components/AssetExample';
import Icon from 'react-native-vector-icons/Feather';
import { Card, ListItem, Header, Button } from 'react-native-elements';
import Footer from "./Footer";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HeaderComponent from './components/HeaderComponent';


export default function ProfileScreen ({navigation}) {
    let rows = [];
    for (let i = 0; i < 5; i++) {
      let row = [];
      for (let k = 0; k < 3; k++) {
        row.push(
          <Image
            style={styles.gridImage}
            source={{
              uri:
                'https://lh3.googleusercontent.com/RYcAib8YTLa9aCkwHnzDaaqcdy3cVUnnDlm3mw0me0sszqElk1zhltZP3R-NgqONs18cY9iCqwNfiTNigfPnA1bJkOgyAflW7TX5AjwoZlmd-I-qgtAnZdZSTfNl5k1IitZaqpQPRw=s200-p-k',
            }}
          />
        );
      }
      rows.push(<View style={{ flexDirection: 'row' }}>{row}</View>);
    }

    return (
      <View style={styles.container}>
       <HeaderComponent />
        <ScrollView style={styles.scrollView}>
          <View style={styles.profile}>
            <View style={styles.profileInfo}>
              <View>
                <Image
                  style={styles.tinyLogo}
                  source={{
                    uri:
                      'https://lh3.googleusercontent.com/RYcAib8YTLa9aCkwHnzDaaqcdy3cVUnnDlm3mw0me0sszqElk1zhltZP3R-NgqONs18cY9iCqwNfiTNigfPnA1bJkOgyAflW7TX5AjwoZlmd-I-qgtAnZdZSTfNl5k1IitZaqpQPRw=s200-p-k',
                  }}
                />
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'stretch',
                  flex: 2,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignContent: 'space-between',
                    paddingBottom: 5,
                  }}>
                  <View
                    style={{
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      margin: 5,
                    }}>
                    <Text style={styles.whiteText}>#</Text>
                    <Text style={styles.whiteText}>Posts</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      margin: 5,
                    }}>
                    <Text style={styles.whiteText}>#</Text>
                    <Text style={styles.whiteText}>Following</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      margin: 5,
                    }}>
                    <Text style={styles.whiteText}>#</Text>
                    <Text style={styles.whiteText}>Followers</Text>
                  </View>
                </View>
                <TouchableOpacity
                  style={{
                    backgroundColor: 'white',
                    paddingTop: 5,
                    paddingBottom: 5,
                    paddingLeft: 15,
                    paddingRight: 15,
                    alignSelf: 'center',
                  }}>
                  <Text>Follow</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.profileDescription}>
              <Text style={styles.profileText}>PortDA</Text>
              <Text style={{ color: '#fff' }}>Virtual Agency Network</Text>
            </View>
          </View>
          <View style={styles.middle}>{rows}</View>
        </ScrollView>
        
      </View>
    );
  }




const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  scrollView: {
    flex: 3,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: '#f90',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
    paddingTop: 20,
  },
  profile: {
    flex: 3,
    backgroundColor: '#146eb4',
  },
  middle: {
    flex: 5,
    backgroundColor: 'white',
  },
  profileInfo: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
  },
  profileDescription: {
    flex: 2,
    marginBottom: 10,
    marginLeft: 10,
  },
  headerText: {
    fontSize: 20,
    textAlign: 'center',
    flex: 1,
    color: '#fff',
  },
  profileText: {
    fontSize: 20,
    color: '#fff',
  },
  whiteText: {
    color: '#fff',
  },
  tinyLogo: {
    width: 75,
    height: 75,
    borderRadius: 200 / 2,
    borderWidth: 0.5,
    borderColor: 'black',
    marginLeft: 10,
  },
  gridImage: {
    width: '33.33%',
    height: 150,
    borderColor: 'black',
    borderWidth: 0.5,
  },
});

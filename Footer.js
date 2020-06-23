import React, {Component} from 'react';
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
import Icon from 'react-native-vector-icons/Feather';

class Footer extends Component{
   render() {
    return (
<View style={styles.footer}>
          <View style={styles.footerViews}>
            <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => this.props.navigation.navigate("Home")} >
              <Icon name="home" size={25} color="white" />
              <Text style={{ color: 'white' }}>Home</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.footerViews}>
            <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => this.props.navigation.navigate("Posts")} >
              <Icon name="list" size={25} color="white" />
              <Text style={{ color: 'white' }}>Posts</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.footerViews}>
            <TouchableOpacity style={{ alignItems: 'center' }}>
              <Icon name="plus-circle" size={25} color="white" />
              <Text style={{ color: 'white', textAlign: 'center' }}>
                New Post
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.footerViews}>
            <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => this.props.navigation.navigate("Search")} >
              <Icon name="search" size={25} color="white" />
              <Text style={{ color: 'white' }}>Search</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.footerViews}>
            <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => this.props.navigation.navigate("Profile")} >
              <Icon name="user" size={25} color="white" />
              <Text style={{ color: 'white' }}>Profile</Text>
            </TouchableOpacity>
          </View>
        </View>); }
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#146eb4',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'black',
    flexDirection: 'row',
    alignContent: 'stretch',
    padding: 10,
  },
  footerViews: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Footer;

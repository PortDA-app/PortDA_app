import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import Footer from "./Footer";
import TabNavigator from "./TabNav";

class HomeScreen extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        
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

export default HomeScreen;
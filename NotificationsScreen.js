import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import Footer from "./Footer";

class NotificationsScreen extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>Notifications Screen</Text>
        
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

export default NotificationsScreen;
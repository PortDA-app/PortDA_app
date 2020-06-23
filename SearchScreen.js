import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import Footer from "./Footer";

class SearchScreen extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>Search Screen</Text>
        
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

export default SearchScreen;
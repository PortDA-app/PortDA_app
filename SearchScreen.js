import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import Footer from "./Footer";
import HeaderComponent from './components/HeaderComponent';
class SearchScreen extends Component {
  render () {
    return ([
	<HeaderComponent />,
      <View style={styles.container}>
        <Text>Search Screen</Text>
        
      </View>
    ]);
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
import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import HeaderComponent from './components/HeaderComponent';


class HomeScreen extends Component {
  render () {
    return (
      <View style={styles.container}>
		<HeaderComponent />
        <Text>Home Screen</Text>
      </View>
	  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  }
});

export default HomeScreen;
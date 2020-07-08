import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import Footer from "./Footer";
import HeaderComponent from './components/HeaderComponent';
class CreatePostScreen extends Component {
  render () {
    return (
      <View style={styles.container}>
		<HeaderComponent />
        <Text>Create Post Screen Screen</Text>
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

export default CreatePostScreen;
import React, {Component} from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';
import { Input } from 'react-native-elements';

import { createAppContainer } from 'react-navigation-stack';
import Footer from "./Footer";
import TabNavigator from "./TabNav";
import HomeScreen from "./HomeScreen";
import SignupScreen from "./SignupScreen";

class LoginScreen extends Component {

  render () {
    return (
      <View style={styles.container}>
        	
       
        <Input
		  placeholder='Enter Email'
		/>
		<Input
			secureTextEntry={true}
			placeholder='Enter password'
		/>
    
		
		<Button title="Login" onPress={()=>this.props.navigation.navigate('Home')}/>
    <Text>New Here??</Text>
    <Button title="Signup" onPress={()=>this.props.navigation.navigate('Signup')}/>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center'
  },
  button:{
    backgroundcolor:'blue'
  }
});

export default LoginScreen;
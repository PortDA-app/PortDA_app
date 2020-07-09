import React, {Component} from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert,Picker } from 'react-native';
import { Input} from 'react-native-elements';

import { createAppContainer } from 'react-navigation-stack';
import Footer from "./Footer";
import TabNavigator from "./TabNav";
import HomeScreen from "./HomeScreen";


class SignupScreen extends Component {
  render () {
	// const [selectedValue, setSelectedValue] = useState("Ship operator");
    return (
      <View style={styles.container}>
        <Input
		  placeholder='Enter Email'
		/>
		<Input
			secureTextEntry={true}
			placeholder='Enter password'
		/>
		<Picker 
		style={{ height: 50, width: 1000,backgroundcolor:'grey' }}
		>
	        <Picker.Item label="Ship operator" value="3" />
	        <Picker.Item label="Agent" value="2" />
	        <Picker.Item label="Other" value="12" />

	    </Picker>

		<Button title="Register" onPress={()=>this.props.navigation.navigate('Login')}/>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center'
  }
});

export default SignupScreen;
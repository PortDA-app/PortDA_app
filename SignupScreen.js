import React, {Component} from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert,Picker } from 'react-native';
import { Input} from 'react-native-elements';

import { createAppContainer } from 'react-navigation-stack';
import Footer from "./Footer";
import TabNavigator from "./TabNav";
import HomeScreen from "./HomeScreen";


class SignupScreen extends Component {

	constructor(props){
      super(props)
      this.state = {
        userEmail:'',
        userPassword:'',
        userRole:''
      }
    }

    userRegister = () => {
    	const {userEmail} = this.state;
    	const {userPassword}= this.state;
    	const {userRole} = this.state;

    	fetch('https://www.portda.com/api/signup',{
    		method:'post',
    		headers:{
            'Content-Type'  : 'application/json',
            'PortDA-Allowed-Users': 'PortDA_Team',
            'Authorization' : 'Basic YWRtaW5AcG9ydGRhLmNvbTo1MGNjYWQxMjE3NTI4NDEyNzMwMDdlMTUwMTE3YWViMjI3OTVmMDU4MzllYTg3N2M0NDcxMTc3MTUwYWZlNzlk'
          },
          body:JSON.stringify({
            email:userEmail,
            password:userPassword,
            role:userRole
          })
    	})
    	 .then((response)=>response.json())
        .then((responseJson)=>{
            // alert(responseJson);
            // alert(JSON.stringify(responseJson));
            alert(JSON.stringify(responseJson));
            console.log(body);
        })
        .catch((error)=>{
          console.error(error);
        });
    }

  render () {
	
    return (
      <View style={styles.container}>
        <Input
		  placeholder='Enter Email'
		  onChangeText = {userEmail => this.setState({userEmail})}
		/>
		<Input
			secureTextEntry={true}
			placeholder='Enter password'
			onChangeText = {userPassword => this.setState({userPassword})}
		/>
		<Input
			placeholder='Choose role'
			onChangeText = {userRole => this.setState({userRole})}
		 />

		<Button title="Register" onPress={this.userRegister}/>
        
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
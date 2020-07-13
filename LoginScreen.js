import React, {Component} from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert,Keyboard } from 'react-native';
import { Input } from 'react-native-elements';

import { createAppContainer } from 'react-navigation-stack';
import Footer from "./Footer";
import TabNavigator from "./TabNav";
import HomeScreen from "./HomeScreen";
import SignupScreen from "./SignupScreen";

class LoginScreen extends Component {

    constructor(props){
      super(props)
      this.state = {
        email:"",
        password:""
      }
    }

    userLogin = () => {

      const{email} = this.state;
      const{password} = this.state;

      Keyboard.dismiss();

      fetch('https://www.portda.com/api/login',{
          method:'post',
          headers: {
                      'Content-Type'  : 'application/json',
                          'PortDA-Allowed-Users': 'PortDA_Team',
                          'Authorization' : 'Basic YWRtaW5AcG9ydGRhLmNvbTo1MGNjYWQxMjE3NTI4NDEyNzMwMDdlMTUwMTE3YWViMjI3OTVmMDU4MzllYTg3N2M0NDcxMTc3MTUwYWZlNzlk'
                    },
          body:JSON.stringify({
            email:email,
            password:password
          })
      })
      .then((response)=>response.json())
        .then((responseJson)=>{
            // alert(responseJson);
            alert(JSON.stringify(responseJson));
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
        onChangeText = {email =>this.setState({email})}
  		/>
  		<Input
  			secureTextEntry={true}
  			placeholder='Enter password'
        onChangeText = {password => this.setState({password})}
  		/>
  		<Button title="Login" onPress={this.userLogin}/>
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
  }
});

export default LoginScreen;
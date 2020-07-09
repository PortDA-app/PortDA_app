import * as React from 'react';
import { StyleSheet, Text, View, Dimensions,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button,Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';

function RenderleftComponent(){
		const navigation = useNavigation();
		return (
		//navigation.openDrawer()
			 <TouchableOpacity onPress={() => null}>
			  <Icon name="menu" size={25} color="white" backgroundColor="#00000"/>
			</TouchableOpacity>
		);
	}
	
	function RenderRightComponent(){
		return (
			 <TouchableOpacity onPress={() => null}>
			  <Icon name="settings" size={25} color="white" backgroundColor="#00000"/>
			</TouchableOpacity>
		);
	}

export default function HeaderComponent() {

  return (
    <Header
	  leftComponent={<RenderleftComponent/>}
	  centerComponent={{ text: 'PortDA', style: { color: '#fff' } }}
	  rightComponent={<RenderRightComponent/>}
	  containerStyle={{
		backgroundColor: '#146eb4',
		justifyContent: 'space-around',
	  }}
	/>
  );
}
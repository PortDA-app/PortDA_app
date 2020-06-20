import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import AssetExample from './components/AssetExample';
import Icon from 'react-native-vector-icons/Fontisto';
import { Card,ListItem,Header,Button  } from 'react-native-elements';
const users = [
 {
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
 }
]
export default function App() {
  return ([
    <Header
      leftComponent={{ icon: 'menu', color: '#fff' }}
      centerComponent={{ text: 'PortDA', style: { color: '#fff' } }}
      rightComponent={{ icon: 'home', color: '#fff' }}
    />,
    <Card
      title='HELLO WORLD'>
      <Text style={{marginBottom: 10}}>
        The idea with React Native Elements is more about component structure than actual design.
      </Text>
      <Button
        icon={{name: 'code'}}
        backgroundColor='#03A9F4'
        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
        title='VIEW NOW' />
    </Card>
  ]);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  }
});

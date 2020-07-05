import React, { Component, useState } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
function NewPostScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Share Post</Text>
      </View>
      <View style={styles.profileInfo}>
        <View>
          <Image
            style={styles.tinyLogo}
            source={{
              uri:
                'https://lh3.googleusercontent.com/RYcAib8YTLa9aCkwHnzDaaqcdy3cVUnnDlm3mw0me0sszqElk1zhltZP3R-NgqONs18cY9iCqwNfiTNigfPnA1bJkOgyAflW7TX5AjwoZlmd-I-qgtAnZdZSTfNl5k1IitZaqpQPRw=s200-p-k',
            }}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={styles.buttonStyle}>
          <Icon name="user" size={20} />
          <Text style={styles.buttonText}>PortDA Team</Text>
          <Icon name="chevron-down" size={20} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle}>
          <Icon name="globe" size={20} />
          <Text style={styles.buttonText}>Anyone</Text>
          <Icon name="chevron-down" size={20} />
        </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 10 }}>
        <TextInput
          multiline
          numberOfLines={15}
          placeholder="What do you want to talk about?"
        />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text style={{flex: 1, fontSize: 10, padding: 10, alignSelf: 'center'}}># Add hashtag</Text>
        <TextInput style={{flex: 2, fontSize: 10, alignSelf: 'stretch'}} placeholder="Help the right people see your post"/>
      </View>
      <View style={styles.bottom}>
      <TouchableOpacity style={styles.bottomIcons}><Icon name="camera" size={15} /></TouchableOpacity>
      <TouchableOpacity style={styles.bottomIcons}><Icon name="video" size={15} /></TouchableOpacity>
      <TouchableOpacity style={styles.bottomIcons}><Icon name="image" size={15} /></TouchableOpacity>
      <TouchableOpacity style={styles.bottomIcons}><Icon name="more-horizontal" size={15} /></TouchableOpacity>
      <TouchableOpacity style={styles.bottomIcons}><Icon name="at-sign" size={15} /></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  tinyLogo: {
    width: 50,
    height: 50,
    borderRadius: 200 / 2,
    margin: 5,
    flex: 1,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginBottom: 5,
  },
  buttonText: {
    fontSize: 12,
    textAlign: 'center',
    textAlignVertical: 'center',
    alignSelf: 'center',
    paddingLeft: 5,
    paddingRight: 5,
  },
  buttonStyle: {
    flexDirection: 'row',
    borderStyle: 'solid',
    borderColor: 'grey',
    borderWidth: 1,
    marginTop: 15,
    marginBottom: 15,
    margin: 5,
    padding: 2,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50
  },
  header: {
    backgroundColor: '#f90',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
    paddingTop: 20,
  },
  headerText: {
    fontSize: 15,
    textAlign: 'center',
    flex: 1,
    color: '#fff',
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'stretch',
    margin: 10
  },
  bottomIcons: {
flex: 1,
 alignItems: 'center'
  }
});

export default NewPostScreen;

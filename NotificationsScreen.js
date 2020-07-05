import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import Footer from './Footer';
import Icon from 'react-native-vector-icons/Feather';

class NotificationsScreen extends Component {
  render() {
    let row = [];
    for (let k = 0; k < 4; k++) {
      row.push(
        <View style={styles.notification}>
          <View>
            <Image
              style={styles.tinyLogo}
              source={{
                uri:
                  'https://lh3.googleusercontent.com/RYcAib8YTLa9aCkwHnzDaaqcdy3cVUnnDlm3mw0me0sszqElk1zhltZP3R-NgqONs18cY9iCqwNfiTNigfPnA1bJkOgyAflW7TX5AjwoZlmd-I-qgtAnZdZSTfNl5k1IitZaqpQPRw=s200-p-k',
              }}
            />
          </View>
          <View style={styles.notificationText}>
          <Text
            adjustsFontSizeToFit={true}
            numberOfLines={
              3
            }>{`Your post has 45 views so far. Try mentioning someone in a comment to get the conversation going: Crew Change Suspended in Sri Lanka After 29 Seafarers Tes...`}</Text></View>
            <View><TouchableOpacity style={styles.icon}><Icon name="more-vertical" size={15} /></TouchableOpacity><Text style={{fontSize: 10, alignSelf: 'center'}}>17m</Text></View>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>PortDA</Text>
        </View>
        <ScrollView>{row}</ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
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
    fontSize: 20,
    textAlign: 'center',
    flex: 1,
    color: '#fff',
  },
  tinyLogo: {
    width: 50,
    height: 50,
    borderRadius: 200 / 2,
    margin: 5,
    flex: 1,
  },
  notificationText: {
    paddingTop: 10,
    paddingBottom: 10,
    alignSelf: 'center',
    width: '75%',
  },
  notification: {
    flexDirection: 'row',
    borderStyle: 'solid',
    borderBottomWidth: 0.5,
    borderColor: 'black',
  },
  icon: {
    padding: 10
  }
});

export default NotificationsScreen;

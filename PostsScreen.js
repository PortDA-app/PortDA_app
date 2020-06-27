import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

class PostsScreen extends Component {
  render() {
    let row = [];
      for (let k = 0; k < 3; k++) {
        row.push(<View
            style={{
              marginBottom: 10,
              backgroundColor: 'white',
            }}>
            <View
              style={[
                styles.profileInfo,
                { borderColor: 'grey', borderWidth: 1, borderStyle: 'solid' },
              ]}>
              <View>
                <Image
                  style={styles.tinyLogo}
                  source={{
                    uri:
                      'https://lh3.googleusercontent.com/RYcAib8YTLa9aCkwHnzDaaqcdy3cVUnnDlm3mw0me0sszqElk1zhltZP3R-NgqONs18cY9iCqwNfiTNigfPnA1bJkOgyAflW7TX5AjwoZlmd-I-qgtAnZdZSTfNl5k1IitZaqpQPRw=s200-p-k',
                  }}
                />
              </View>
              <View style={{ flex: 9, margin: 15 }}>
                <Text>PortDA</Text>
                <Text>Virtual Agency Network</Text>
              </View>
            </View>
            <View style={styles.profileInfo}>
              <Text>
                This is the description of the post.
              </Text>
            </View>
            <View>
              <Image
                style={{ width: '100%', height: 250 }}
                source={{
                  uri:
                    'https://lh3.googleusercontent.com/RYcAib8YTLa9aCkwHnzDaaqcdy3cVUnnDlm3mw0me0sszqElk1zhltZP3R-NgqONs18cY9iCqwNfiTNigfPnA1bJkOgyAflW7TX5AjwoZlmd-I-qgtAnZdZSTfNl5k1IitZaqpQPRw=s200-p-k',
                }}
              />
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                width: '100%',
                borderColor: 'grey',
                borderWidth: 1,
                borderStyle: 'solid',
                padding: 5,
              }}>
              <TouchableOpacity style={styles.icon}>
                <Icon name="thumbs-up" size={25} />
                <Text style={{ margin: 5 }}>Like</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.icon}>
                <Icon name="message-square" size={25} />
                <Text style={{ margin: 5 }}>Comment</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.icon}>
                <Icon name="share" size={25} />
                <Text style={{ margin: 5 }}>Share</Text>
              </TouchableOpacity>
            </View>
          </View>);
          }
    return (
      <View style={styles.container}>
      <View style={styles.header}>
          <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Icon name="menu" size={25} color="white" />
            </TouchableOpacity>
          </View>
          <Text style={styles.headerText}>PortDA</Text>
          <View style={{ flex: 1 }}></View>
        </View>
        <ScrollView>
          {row}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  profileInfo: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  tinyLogo: {
    width: 75,
    height: 75,
    borderRadius: 200 / 2,
    borderWidth: 0.5,
    borderColor: 'black',
    margin: 5,
    flex: 1,
  },
  icon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  header: {
    backgroundColor: '#f90',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
  },
  headerText: {
    fontSize: 20,
    textAlign: 'center',
    flex: 1,
    color: '#fff',
  },
});

export default PostsScreen;

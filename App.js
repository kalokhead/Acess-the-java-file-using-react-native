/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */



import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
 
// We are importing the native Java module here
import {NativeModules} from 'react-native';
var HelloWorld = NativeModules.HelloWorld;
 

export default class App extends Component {
 
  // async function to call the Java native method
  async sayHiFromJava() {
    HelloWorld.sayHi( (err) => {console.log(err)}, (msg) => {console.log(msg)} );
  }
  
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={ this.sayHiFromJava }>
              <Text>Press here</Text>
    <Text>{HelloWorld.sayHi}</Text>
         </TouchableOpacity>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
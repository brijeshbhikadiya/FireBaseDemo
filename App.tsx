import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import LoginScreen from './src/screens/LoginScreen';
import LogOutScreen from './src/screens/LogOutScreen';
import auth from '@react-native-firebase/auth';

const App = () => {
  const [user, setUser] = useState();
  console.log(user);
  
  function onAuthStateChanged(user: any) {
    setUser(user);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; 
  }, []);

  return <View>{user ? <LogOutScreen /> : <LoginScreen />}</View>;
};

export default App;

const styles = StyleSheet.create({});

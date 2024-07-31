import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import React from 'react';
import auth from '@react-native-firebase/auth';

const LogOutScreen = () => {
    const onLogout = () => {
        auth().signOut().then(response=>{
            Alert.alert('user sign out')
        })
        .catch(error => {
            Alert.alert('error signing out')
        });
    }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Logout Screen</Text>
      <TouchableOpacity
        onPress={onLogout}
        style={styles.logoutButton}>
        <Text style={styles.logout}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LogOutScreen;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    color: '#000',
    fontWeight: '500',
    marginTop: 30,
  },
  logout: {
    fontSize: 15,
    color: '#000000',
    fontWeight: '500',
  },
  logoutButton: {
    backgroundColor: '#FCAF03',
    padding: 12,
    borderRadius: 20,
    width: '90%',
    alignItems: 'center',
    marginBottom: 30,
  },
});

import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';


const GoogleLogin = () => {
  GoogleSignin.configure({
    webClientId:
      '649187457700-i8gvqigp5agfhlti3rjn7d4m26n1fj29.apps.googleusercontent.com',
  });

  const onGoogleSignIn = async () => {
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    const { idToken } = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    return auth().signInWithCredential(googleCredential);
  }

  return (
    <View style={styles.container}>
      <Button title='Login With Google' onPress={onGoogleSignIn} styles></Button>
    </View>
  );
};

export default GoogleLogin;

const styles = StyleSheet.create({
    container:{
        marginTop:20
    }
});

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import { SignIn } from './pages';
import Router from './router';

const App = () => {
  return (
    <NavigationContainer>
      {/* <SignIn /> */}
      <Router />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});

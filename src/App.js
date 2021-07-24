import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import { SignIn } from './pages';

const App = () => {
  return (
    <NavigationContainer>
      <SignIn />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});

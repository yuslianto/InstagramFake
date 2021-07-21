import React from 'react';
import {StyleSheet} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

import {SplashScreen} from './pages';

const App = () => {
  return (
    <NavigationContainer>
      <SplashScreen />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});

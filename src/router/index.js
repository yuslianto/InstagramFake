import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {
  SplashScreen,
  SignIn,
  SignUp,
  chooseSign,
  confirNumber,
  setNamePass,
} from '../pages';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="chooseSign"
        component={chooseSign}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="confirNumber"
        component={confirNumber}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="setNamePass"
        component={setNamePass}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Router;

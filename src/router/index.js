import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  SplashScreen,
  SignIn,
  SignUp,
  chooseSign,
  confirNumber,
  setNamePass,
  Home,
  Search,
  Reels,
  Shopp,
  Profile,
} from '../pages';

import {BottomTabNav} from '../components';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomTabNav {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Reels" component={Reels} />
      <Tab.Screen name="Shopp" component={Shopp} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BottomNavigator"
        component={BottomNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="chooseSign"
        component={chooseSign}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="confirNumber"
        component={confirNumber}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="setNamePass"
        component={setNamePass}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;

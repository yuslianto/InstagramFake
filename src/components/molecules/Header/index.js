import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = ({ title }) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});

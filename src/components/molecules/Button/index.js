import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Button = ({ label }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{label}</Text>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0594f2',
    padding: 18,
    width: '100%',
    borderRadius: 8,
  },
  text: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
  },
});

import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Button = ({ label, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>{label}</Text>
      </View>
    </TouchableOpacity>
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

import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { color } from 'react-native-reanimated';

const Button = ({ label, onPress, color = '#0594f2', textColor = '#0594f2' }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container(color)}>
      <Text style={styles.text(textColor)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: color => ({
    backgroundColor: color,
    padding: 15,
    width: '100%',
    borderRadius: 8,
  }),
  text: textColor => ({
    textAlign: 'center',
    color: textColor,
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
  }),
});

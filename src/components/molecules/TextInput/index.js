import React from 'react';
import { StyleSheet, Text, View, TextInput as Input } from 'react-native';

const TextInput = ({ placeholder }) => {
  return (
    <View style={styles.container}>
      {/* <Text>Input Component</Text> */}
      <Input placeholder={placeholder} style={styles.label} />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  container: {
    padding: 5,
    backgroundColor: 'white',
    borderRadius: 8,
    borderColor: '#97a8b1',
    borderWidth: 1,
    width: '100%',
  },
  label: {
    color: 'black',
    fontSize: 18,
    fontFamily: 'Poppins-Reguler',
  },
});

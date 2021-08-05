import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const LineText = ({ marginBottom }) => {
  return (
    <View style={styles.wrapperColOR(marginBottom)}>
      <View style={styles.line} />
      <View style={styles.wrapperTextOR}>
        <Text>OR</Text>
      </View>
      <View style={styles.line} />
    </View>
  );
};

export default LineText;

const styles = StyleSheet.create({
  wrapperColOR: marginBottom => ({
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: marginBottom,
  }),
  wrapperTextOR: {
    padding: 5,
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    width: '45%',
  },
});

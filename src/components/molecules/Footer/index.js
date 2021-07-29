import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Footer = ({ label, textLink, onPress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        {label}
        <Text onPress={onPress} style={styles.textLink}>
          {textLink}
        </Text>
      </Text>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  label: {
    color: '#a0a0a0',
    fontSize: 18,
    fontFamily: 'Poppins-Reguler',
  },
  textLink: {
    color: '#14426c',
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
  },
});

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {IgIcon} from '../../assets';
import {Gap} from '../../components';

const SplashScreen = () => {
  return (
    <View style={styles.page}>
      <IgIcon />
      <Gap height={30} />
      <Text style={styles.text}>Welcome In Instagram</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  logo: {
    width: '50%',
    height: '50%',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
});

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {FbIcon, IgIcon} from '../../assets';
import {Gap} from '../../components';

const SplashScreen = () => {
  return (
    <View style={styles.page}>
      <View style={styles.logo}>
        <IgIcon />
      </View>
      <View style={styles.wrapperIcon}>
        <Text style={styles.text}>from</Text>
        <Gap height={-30} />
        <FbIcon />
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  logo: {
    flex: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapperIcon: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#828282',
    textAlign: 'center',
    marginBottom: -30,
  },
});
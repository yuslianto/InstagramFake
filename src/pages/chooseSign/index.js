import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { IgLogo } from '../../assets';
import { Button, Footer, Header } from '../../components';

const chooseSign = () => {
  return (
    <View style={styles.page}>
      <Header title="English" />
      <IgLogo style={styles.igLogo} />
      <View>
        <Button label="Continue with Facebook" />
        <Button label="Sign up with email or phone number" />
      </View>
      <View style={styles.wrapperColOR}>
        <View style={styles.line} />
        <View style={styles.wrapperTextOR}>
          <Text>OR</Text>
        </View>

        <View style={styles.line} />
      </View>
      <Footer label="Already have an account?" textLink="Log in." />
    </View>
  );
};

export default chooseSign;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  igLogo: {
    // width: 100,
    // height: 500,
  },
  wrapperColOR: {
    //flex: 1,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapperTextOR: {
    padding: 5,
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    width: '45%',
  },
});

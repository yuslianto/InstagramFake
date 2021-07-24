import React from 'react';
import { StyleSheet, View } from 'react-native';
import { UserIcon } from '../../assets';
import { Button, Footer, Gap, TextInput } from '../../components';

const SignIn = () => {
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <View style={styles.wrapperIcon}>
          <UserIcon />
        </View>
        <Gap height={20} />
        <TextInput placeholder={'your email address'} />
        <Gap height={20} />
        <Button label={'Next'} />
      </View>
      <View style={styles.footer}>
        <Footer label={'Already have an account?'} textLink={' Log In.'} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  content: {
    flex: 9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 10,
  },
  wrapperIcon: {
    width: 150,
    height: 150,
    borderWidth: 3,
    borderColor: 'black',
    borderRadius: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SignIn;

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { IgLogo } from '../../assets';
import { Button, Footer, Gap, Header, LineText } from '../../components';

const chooseSign = ({ navigation }) => {
  return (
    <View style={styles.page}>
      <View style={styles.wrapperHeader}>
        <Header title="English" />
      </View>
      <View style={styles.wrapperContent}>
        <Gap height={0} />
        <IgLogo style={styles.igLogo} />
        <View style={styles.wrapperButton}>
          <Button
            label="Continue with Facebook"
            textColor="white"
            onPress={() => navigation.navigate('SignIn')}
          />
          <Gap height={40} />
          <LineText marginBottom={-5} />
          <Button
            label="Sign up with email or phone number"
            color="white"
            onPress={() => navigation.navigate('SignUp')}
          />
        </View>
      </View>
      <View style={styles.wrapperFooter}>
        <Footer
          label="Already have an account?"
          textLink="Log in."
          onPress={() => navigation.navigate('SignIn')}
        />
      </View>
    </View>
  );
};

export default chooseSign;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  wrapperHeader: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapperContent: {
    flex: 8,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
  },
  wrapperButton: {
    width: '100%',
  },
  wrapperFooter: {
    flex: 1,
    justifyContent: 'center',
  },
});

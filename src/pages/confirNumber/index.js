import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Button, Gap, TextInput } from '../../components';

const confirNumber = () => {
  return (
    <View style={styles.page}>
      <Gap height={30} />
      <View style={styles.wrapperText}>
        <Text style={styles.title}>ENTER CONFIRMATION CODE</Text>
        <Gap height={10} />
        <Text style={styles.subTitle}>
          Enter the confirmatiion code we send to your email.
          <Text style={styles.textLink}>Resend code.</Text>
        </Text>
      </View>
      <Gap height={20} />
      <TextInput placeholder="Confirmation code" />
      <Gap height={10} />
      <Button label="Next" textColor="white" />
    </View>
  );
};

export default confirNumber;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  wrapperText: {
    alignItems: 'center',
    width: '70%',
  },
  title: {
    fontFamily: 'Poppins-Reguler',
    fontSize: 20,
  },
  subTitle: {
    textAlign: 'center',
    fontFamily: 'Poppins-Reguler',
    fontSize: 18,
  },
  textLink: {
    color: '#0594f2',
  },
});

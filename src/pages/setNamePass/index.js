import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Button, Gap, TextInput } from '../../components';

const setNamePass = () => {
  return (
    <View style={styles.page}>
      <Text>NAME AND PASSWORD</Text>
      <Gap height={30} />
      <TextInput placeholder="Full name" />
      <Gap height={20} />
      <TextInput placeholder="Password" />
      <Gap height={20} />
      <View>
        <Text>Checkbox</Text>
        <Text>Remember password</Text>
      </View>
      <Gap height={20} />
      <Button label="Continue and sync Contacts" textColor="white" />
      <Gap height={10} />
      <Button
        label="Continue without syncing contacts"
        textColor="#0594f2"
        color="white"
      />
    </View>
  );
};

export default setNamePass;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
});

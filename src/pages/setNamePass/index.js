import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import { Button, Footer, Gap, TextInput } from '../../components';

const setNamePass = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <View style={styles.page}>
      <Gap height={50} />
      <Text style={styles.title}>NAME AND PASSWORD</Text>
      <Gap height={30} />
      <TextInput placeholder="Full name" />
      <Gap height={15} />
      <TextInput placeholder="Password" />
      <Gap height={15} />
      <View style={styles.wrapperCheckBox}>
        <CheckBox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={newValue => setToggleCheckBox(newValue)}
        />
        <Text>Remember password</Text>
      </View>
      <Gap height={15} />
      <Button label="Continue and sync Contacts" textColor="white" />
      <Gap height={10} />
      <Button
        label="Continue without syncing contacts"
        textColor="#0594f2"
        color="white"
      />
      <View style={styles.wrapperFooter}>
        <Footer
          label="Your contact will be periodecally synced and stored on Instagram server to help you and other find friends and to help us provide a better service. To remove contacts, go to Setting and disconnect,"
          textLink="Learn more."
        />
      </View>
    </View>
  );
};

export default setNamePass;

const styles = StyleSheet.create({
  page: {
    flex: 9,
    alignItems: 'center',
    padding: 20,
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
  },
  wrapperCheckBox: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  wrapperFooter: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});

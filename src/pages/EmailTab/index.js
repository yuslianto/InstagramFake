import React from 'react';
import { View } from 'react-native';
import { Button, Gap, TextInput } from '../../components';

const EmailTab = () => {
  return (
    <View style={{ flex: 1, width: '100%' }}>
      <Gap height={15} />
      <TextInput placeholder={'your email address'} />
      <Gap height={15} />
      <Button label={'Next'} />
    </View>
  );
};

export { EmailTab };

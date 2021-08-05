import React from 'react';
import { Text, View } from 'react-native';
import { Button, Gap, TextInput } from '../../components';

const PhoneTab = ({ navigation, onPress }) => {
  return (
    <View style={{ flex: 1, width: '100%' }}>
      <Gap height={15} />
      <TextInput placeholder={'Enter your phone number'} />
      <Gap height={15} />
      <View>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 16,
            fontFamily: 'Poppins-Reguler',
            color: '#97a8b1',
          }}>
          You may receive SMS updates from Instagram and can opt out at any
          time.
        </Text>
      </View>
      <Gap height={15} />
      <Button
        label="Next"
        textColor="white"
        onPress={() => navigation.navigate('SignUp')}
      />
    </View>
  );
};

export { PhoneTab };

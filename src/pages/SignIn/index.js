import * as React from 'react';
import { View, useWindowDimensions, StyleSheet, Text } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

import { UserIcon } from '../../assets';
import { Button, Footer, Gap, TextInput } from '../../components';

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

const PhoneTab = () => {
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
      <Button label={'Next'} />
    </View>
  );
};

const TabViewExample = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'PHONE', title: 'PHONE' },
    { key: 'EMAIL', title: 'EMAIL' },
  ]);

  const renderScene = SceneMap({
    PHONE: PhoneTab,
    EMAIL: EmailTab,
  });

  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <View style={styles.viewIcon}>
          <View style={styles.wrapperIcon}>
            <UserIcon />
          </View>
        </View>
        <View style={styles.wrapperTab}>
          <TabView
            navigationState={{ index, routes }}
            renderTabBar={props => (
              <TabBar
                {...props}
                renderLabel={({ route, color }) => (
                  <Text style={{ color: 'black', margin: 8 }}>{route.title}</Text>
                )}
                style={{ backgroundColor: 'white' }}
                indicatorStyle={{
                  backgroundColor: 'white',
                  borderBottomColor: 'black',
                }}
              />
            )}
            renderScene={renderScene}
            swipeEnabled={false}
            onIndexChange={setIndex}
            sceneContainerStyle={{ backgroundColor: 'white' }}
            initialLayout={{ width: layout.width }}
          />
        </View>
        <View style={styles.footer}>
          <Footer label={'Already have an account?'} textLink={' Log In.'} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center',
  },
  content: {
    flex: 9,
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  viewIcon: {
    flex: 4,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 20,
  },
  wrapperTab: {
    flex: 6,
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  wrapperIcon: {
    width: 150,
    height: 150,
    borderWidth: 3,
    borderColor: 'black',
    borderRadius: 150,
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 10,
  },
});

export default TabViewExample;

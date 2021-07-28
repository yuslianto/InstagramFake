import * as React from 'react';
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import { UserIcon } from '../../assets';
import { Footer } from '../../components';
import { EmailTab } from '../EmailTab';
import { PhoneTab } from '../PhoneTab';

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
                style={{
                  backgroundColor: 'white',
                  borderBottomColor: 'black',
                  borderBottomWidth: 1,
                }}
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
          // initialLayout={{ width: layout.width }}
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

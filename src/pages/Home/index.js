import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import {
  DummyProfilPic1,
  DummyProfilPic2,
  DummyProfilPic3,
  DummyProfilPic4,
  DummyProfilPic5,
  IcAdd,
  IcLove,
  IcShare,
  IgLogo,
} from '../../assets';
import { Gap, ItemStatusPic } from '../../components';

const Home = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={styles.profileContainer}>
        <IgLogo style={styles.profile} />
        <View style={styles.WrapperIcon}>
          <IcAdd />
          <IcLove />
          <IcShare />
        </View>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <ItemStatusPic image={DummyProfilPic1} name="Add Story" />
        <ItemStatusPic image={DummyProfilPic2} name="Arthur" />
        <ItemStatusPic image={DummyProfilPic3} name="Arneo" />
        <ItemStatusPic image={DummyProfilPic4} name="Nicolas" />
        <ItemStatusPic image={DummyProfilPic5} name="Arneo" />
        <ItemStatusPic image={DummyProfilPic3} name="Nicolas" />
      </ScrollView>
      <Text>Content</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    paddingVertical: 5,
    backgroundColor: 'white',
  },
  WrapperIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '20%',
    // flex: 4,
  },
});

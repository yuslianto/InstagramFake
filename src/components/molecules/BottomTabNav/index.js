import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import {
  IcHomeOn,
  IcProfileOn,
  IcHomeOff,
  IcProfileOff,
  IcReelsOn,
  IcReelsOff,
  IcSearchOn,
  IcSearchOff,
  IcShoppOn,
  IcShoppOff,
} from '../../../assets';

const Icon = ({ label, focus }) => {
  // console.log('label di dalam component icon', label);
  // console.log('fokus di dalam component icon', focus);
  switch (label) {
    case 'Home':
      return focus ? <IcHomeOn /> : <IcHomeOff />;
    case 'Search':
      return focus ? <IcSearchOn /> : <IcSearchOff />;
    case 'Reels':
      return focus ? <IcReelsOn /> : <IcReelsOff />;
    case 'Shopp':
      return focus ? <IcShoppOn /> : <IcShoppOff />;
    case 'Profile':
      return focus ? <IcProfileOn /> : <IcProfileOff />;
    default:
      return <IcHomeOn />;
  }
};

const BottomTabNav = ({ state, descriptors, navigation }) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}>
            <Icon label={label} focus={isFocused} />
            {/* <IcOrderOn /> */}
            {/* {console.log('label di touchable opacity ', label)} */}
            <Text>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomTabNav;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingTop: 15,
    paddingBottom: 13,
    paddingHorizontal: 50,
    justifyContent: 'space-between',
  },
});
